# Use an official lightweight image, such as Alpine
FROM alpine:latest

# Set working directory (optional)
WORKDIR /app

# Copy a script that will print "Hello, World!" into the container
COPY hello.sh .

# Make sure the script is executable
RUN chmod +x hello.sh

# Run the script when the container starts
CMD ["./hello.sh"]
