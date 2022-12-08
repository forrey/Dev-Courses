import fs from "fs";
import path from "path";
// Gray Matter lets us separate metadata from content in markdown files
import matter from "gray-matter";

// Define the path to posts
const postsDirectory = path.join(process.cwd(), "posts");

// Helper function that gets all post files
export function getPostFiles() {
  return fs.readdirSync(postsDirectory);
}

// Helper function for extracting data from a single post
export function getPostData(postIdentifier) {
  // We'll define the slug based on the file name, but remove the extension
  const postSlug = postIdentifier.replace(/\.md$/, "");

  // Define the path
  const filePath = path.join(postsDirectory, `${postSlug}.md`);

  // Read the file
  const fileContent = fs.readFileSync(filePath, "utf-8");

  // Use gray matter to separate data and content
  const { data, content } = matter(fileContent);

  // Now we'll structure our object
  const postData = {
    slug: postSlug,
    ...data,
    content: content,
  };

  return postData;
}

// Getting All Posts
export function getAllPosts() {
  // Read a directiry
  const postFiles = getPostFiles();

  // Map each one to an object using our helper function
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  // Sort them by date
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

// Get only featured posts
export function getFeaturedPosts() {
  // Run AllPosts
  const allPosts = getAllPosts();

  // And filter
  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
