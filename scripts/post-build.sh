#!/bin/bash
# Post-build script to inject Bing verification meta tag
HTML_DIR="/root/projects/ai-interview-coach/frontend/.vercel/output/static"
find "$HTML_DIR" -name "*.html" -exec sed -i 's|<head>|<head>\n<meta name="msvalidate.01" content="8D5AE51845CFE08F58F54A68CFF76D57" />|g' {} \;
echo "✅ Bing meta tag injected"
