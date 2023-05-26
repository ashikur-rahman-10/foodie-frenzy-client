import Pdf from "react-to-pdf";
import { useEffect, useRef, useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch(
            "https://raw.githubusercontent.com/ashikur-rahman-10/dummy-data/main/blogs.json"
        )
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);
    const [inputValue, setInputValue] = useState({
        note: "",
        date: "",
        issued: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            [name]: value,
        });
    };

    const ref = useRef();
    const options = {
        orientation: "landscape",
        unit: "in",
        format: [4, 2],
    };
    return (
        <div className="App">
            <div className="lg:w-[65%] mx-auto w-[90%]" ref={ref}>
                <div className="min-h-[91vh] mb-16">
                    <div className="lg:w-[75%] w-[90%] my-10 mx-auto">
                        <Pdf targetRef={ref} filename="blogs.pdf">
                            {({ toPdf }) => (
                                <div className="flex justify-end my-5">
                                    <button
                                        onClick={toPdf}
                                        className="bg-slate-500 text-white px-3 py-1 rounded-md"
                                    >
                                        Download pdf
                                    </button>
                                </div>
                            )}
                        </Pdf>

                        {blogs.map((b) => (
                            <div key={b.id} className="mt-7">
                                <h3 className="text-xl font-medium mb-2">
                                    <span className="pr-1">{b.id}.</span>
                                    {b.question}
                                </h3>
                                <p>{b.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
