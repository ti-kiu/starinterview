#!/bin/bash
find /root/projects/ai-interview-coach/frontend/.vercel/output/static -name "*.html" -exec sed -i 's|<head>|<head><meta name="msvalidate.01" content="8D5AE51845CFE08F58F54A68CFF76D57" />|g' {} \;
echo "Done"
