# Move All Files Recursively

Move all files within a folder and its subfolders to a new folder.

```shell
#!/bin/zsh

# Define the source directory (where the individual folders are located)
SOURCE_DIR="/path/to/source_directory"

# Define the target directory (where all files will be moved)
TARGET_DIR="/path/to/target_directory"

# Create the target directory if it doesn't exist
mkdir -p "$TARGET_DIR"

# Find all files in the source directory and it's subdirectories (recursively) and move them to the target directory
find "$SOURCE_DIR" -type f -exec mv {} "$TARGET_DIR" \;

echo "All files have been moved to $TARGET_DIR."
```

-   `find "$SOURCE_DIR" -type f`: Recursively finds all files within the source directory and its subdirectories.
-   `-exec mv {} "$TARGET_DIR" \;`: Moves each found file (`{}` is a placeholder for each file) to the target directory.
