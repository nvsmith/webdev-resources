# Delete Text Patterns In A File

Delete all instances of a text pattern (and create a backup of the original file)

```shell
#!/bin/zsh

# navigate to directory of file
cd path/to/file/directory

# e.g. remove all title elements from a file
sed -i.bak 's/<title>.*<\/title>//g' fileName.ext

```

-   `sed`: stream editor
-   `-i.bak`: modify the original file and create a backup
-   `s/`: starts the substitution command
-   `.*`: match as many characters as possible (greedy)
-   `//`: end substitution command
-   `g`: replace all occurrences in each line, not just the first.
-   `fileName.ext`: the filename and extension for the desired modification.
