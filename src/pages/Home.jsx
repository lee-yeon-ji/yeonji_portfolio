
export default function Home() {
    return (


        <div className="grid grid-cols-2 gap-14 max-w-7xl mx-auto max-h-full">
            <div>
                <div className="">
                    <img src="/img/img_home_bg.jpg" alt="img"/>
                </div>
            </div>
            <div className="flex flex-col justify-center ">
                <h1 className="font-bold text-8xl">LEE YEON JI</h1>

                <div className="flex gap-4 text-3xl pt-14">
                    <div>Creative</div>
                    <div className="font-semibold">developer</div>
                </div>

                <div className="pt-14">
                    <a className="bg-black text-white px-4 py-4 text-3xl rounded shadow hover:shadow-lg hover:bg-white hover:text-black hover:border-black transition duration-200" href="/project">go project!</a>

                </div>

            </div>
        </div>

    );
};