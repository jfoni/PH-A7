import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="h-[80vh] flex flex-col gap-4 items-center justify-center ">
            <p className="text-4xl font-bold text-red-500">404 PAGE NOT FOUND!</p>
            <div className="">
                <Image
                    src="https://media.licdn.com/dms/image/v2/C5612AQEa3Z_7MpT0Aw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1565718371048?e=1779321600&v=beta&t=VX3WoSqSNjv4D-MojrTXaaKi-7Lc0JrQzJ-dzNsYiBY"
                    width={500}
                    height={500}
                    alt="no clue"
                />
            </div>
            <div className="">
                <button className="btn">
                    <Link href={'/'}>
                        Home
                    </Link>
                </button>
            </div>
        </div>
    )
}