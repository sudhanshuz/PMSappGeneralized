# Use an official Maven image as a build environment
FROM maven:3.8.4-openjdk-17 AS build

# Set the working directory inside the build container
WORKDIR /app

# Copy the source code and the POM file to the container
COPY . .

# Run the Maven build with the desired path
RUN mvn clean install -Dmaven.compiler.source=17 -Dmaven.compiler.target=17

# Copy the build artifacts to a target directory in the build container
RUN mkdir -p /app/target
RUN cp /app/target/*.jar /app/target/application.jar

# Create the final runtime image
FROM openjdk:17

# Set the working directory inside the final image
WORKDIR /app

# Copy the build artifacts from the build container to the final image
COPY --from=build /app/target/application.jar /app/target/

# Define the command to run your Java application
CMD ["java", "-jar", "/app/target/application.jar"]