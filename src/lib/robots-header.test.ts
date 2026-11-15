import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { getAllInterviewQuestionSlugs } from "../data/interview-questions";
import { getAllScenarioSlugs } from "../data/scenario-pages";
import {
  INDEX_FOLLOW,
  NOINDEX,
  STATIC_INDEXABLE_PATHS,
  robotsTagForPathname,
} from "./robots-header";

const root = path.resolve(import.meta.dirname, "../..");

function staticRoutesFromApp(dir = path.join(root, "src/app"), route = ""): string[] {
  const routes: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "api" || entry.name.startsWith("[")) continue;
    const full = path.join(dir, entry.name);
    const nextRoute = `${route}/${entry.name}`;
    if (entry.isDirectory()) {
      routes.push(...staticRoutesFromApp(full, nextRoute));
    } else if (entry.name === "page.tsx") {
      routes.push(route === "" ? "/" : route);
    }
  }
  return routes;
}

test("static indexable paths match src/app page routes", () => {
  assert.deepEqual(
    [...STATIC_INDEXABLE_PATHS].sort(),
    staticRoutesFromApp().sort(),
  );
});

test("redirect sources in next.config stay indexable", () => {
  const config = fs.readFileSync(path.join(root, "next.config.ts"), "utf8");
  const sources = [...config.matchAll(/source:\s*"([^"]+)"/g)].map((match) => match[1]);
  assert.ok(sources.length > 0);
  for (const source of sources) {
    assert.equal(robotsTagForPathname(source), INDEX_FOLLOW, source);
  }
});

test("live pages and published slugs are index, follow", () => {
  assert.equal(robotsTagForPathname("/practice"), INDEX_FOLLOW);
  assert.equal(robotsTagForPathname("/practice/"), INDEX_FOLLOW);
  assert.equal(robotsTagForPathname("/interview-questions/nurse"), INDEX_FOLLOW);

  for (const slug of getAllInterviewQuestionSlugs()) {
    assert.equal(
      robotsTagForPathname(`/interview-questions/${slug}`),
      INDEX_FOLLOW,
      slug,
    );
  }
  for (const slug of getAllScenarioSlugs()) {
    assert.equal(
      robotsTagForPathname(`/star-method-example/${slug}`),
      INDEX_FOLLOW,
      slug,
    );
  }

  assert.equal(
    robotsTagForPathname("/interview-questions/software-engineer"),
    INDEX_FOLLOW,
  );
  assert.equal(
    robotsTagForPathname("/star-method-example/tell-me-about-a-time-you-failed"),
    INDEX_FOLLOW,
  );
});

test("unknown documents, including unknown dynamic slugs, are noindex", () => {
  for (const pathname of [
    "/phone-interview-questions",
    "/this-page-does-not-exist-pr4-check",
    "/star-method-example/what-are-your-biggest-weaknesses",
    "/interview-questions/this-slug-does-not-exist",
    "/star-method-example",
    "/interview-questions/software-engineer/extra",
  ]) {
    assert.equal(robotsTagForPathname(pathname), NOINDEX, pathname);
  }

  assert.equal(
    getAllScenarioSlugs().includes("what-are-your-biggest-weaknesses"),
    false,
  );
  assert.equal(
    getAllInterviewQuestionSlugs().includes("this-slug-does-not-exist"),
    false,
  );
});

test("files and api routes keep the index header", () => {
  assert.equal(robotsTagForPathname("/sitemap.xml"), INDEX_FOLLOW);
  assert.equal(robotsTagForPathname("/robots.txt"), INDEX_FOLLOW);
  assert.equal(robotsTagForPathname("/api/practice"), INDEX_FOLLOW);
});
