import styles from "./post-content.module.css";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

function PostContent(props) {
  const { title, image, content, slug } = props.post;

  // We get a slug which is the file name
  // But we need to build a path to the actual file
  const imagePath = `/images/posts/${slug}/${image}`;

  // We still want to be able to custom render elements
  // So here we define custom renderers
  // In the component return function, we pass them to <ReactMarkdown />
  const customRenderers = {
    p(paragraph) {
      // Basically we want to find every instance where a paragraph contains an <img>
      // And replace it with a <div><Image /></div>
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={styles.image}>
            <Image
              src={`/images/posts/${slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1];
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      );
    },
  };

  console.log(slug);

  return (
    <article className={styles.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
