import { promises as fs, existsSync } from "fs"
import path from "path"
import matter from "gray-matter"
import { PostMetadataPart, PostMetadata } from "~/types"

const postsDir = path.join(process.cwd(), "src", "pages", "posts")

export const getPosts = async () => {
    const posts = await fs.readdir(postsDir)
    const metadata: PostMetadata[] = await Promise.all(
        posts
            .filter(dirName => {
                const index = path.join(postsDir, dirName, "index.mdx")
                const exists = existsSync(index)
                return exists
            })
            .map(async (dirName) => {
                const index = path.join(postsDir, dirName, "index.mdx")
                const contents = await fs.readFile(index)
                const obj = matter(contents.toString())
                return {
                    id: dirName,
                    ...(obj.data as PostMetadataPart)
                }
            })
    )

    return metadata.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    return metadata
}
// const importAll = (ctx: __WebpackModuleApi.RequireContext): FetchedPostMeta[] => {
//     return ctx.keys().map(fileName => {
//         console.log(fileName)
//         return {
//         link: fileName.substr(1).replace(/\/index\.mdx$/, ""),
//         module: ctx(fileName)
//     }})
// }

// export const posts: FetchedPostMeta[] = importAll(
//     require.context("../pages/posts/", true, /\.mdx$/)
// )