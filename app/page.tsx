import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default function Page() {
  const filePath = path.join(process.cwd(), 'app', 'content', 'home.md');
  const content = fs.readFileSync(filePath, 'utf8');

  return (
    <section className="prose prose-neutral dark:prose-invert">
      <MDXRemote source={content} />
    </section>
  );
}
