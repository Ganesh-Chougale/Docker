A **base image** is the foundational image in Docker from which other images are built. It provides the minimal environment required to run an application or create a new image. 

### Characteristics of Base Images:
1. **Starting Point**: The base image is specified at the beginning of a **Dockerfile** using the `FROM` instruction.
2. **No Parent Image**: Some base images (e.g., `scratch`) do not inherit from any other image and are completely empty.
3. **Customization**: Users can extend a base image by adding software, configurations, and dependencies to create new images.

### Types of Base Images:
1. **Minimal Base Images**:
   - Example: `scratch`
   - Used when you want a completely empty image and manually add only the necessary files (e.g., statically compiled binaries).

2. **Standard Base Images**:
   - Examples: `debian`, `ubuntu`, `alpine`, `centos`
   - These provide a minimal operating system environment and common utilities.
   - `alpine` is popular for being lightweight (~5 MB) and is ideal for reducing image size.

3. **Language/Framework-Specific Base Images**:
   - Examples: `node`, `python`, `openjdk`
   - These come pre-installed with runtime environments for specific languages or frameworks, simplifying development.

### Why Use a Base Image?
1. **Reusability**: Saves time by starting with a pre-configured environment.
2. **Consistency**: Ensures uniformity across development and production environments.
3. **Efficiency**: Reduces the amount of configuration needed for building custom images.