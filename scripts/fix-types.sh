#!/bin/sh

# Path to the generated declaration file
FILE="dist/types/index.d.ts"

# Temp file
TMP="$FILE.tmp"

# Replace the first line with the desired import
{ 
  echo "import { timezones } from '../timezones';"
  tail -n +2 "$FILE"
} > "$TMP"

# Replace the original file
mv "$TMP" "$FILE"

echo "✔️ First line replaced in $FILE"
