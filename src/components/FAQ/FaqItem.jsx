import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const FaqItem = ({title, text}) => {
    const [accordionOpen, setAccordionOpen] = useState(false);
    return (
        <div>
            <div className=" myBorder rounded-xl bg-[#B5EDFF] my-6">

                <button onClick={() => setAccordionOpen(!accordionOpen)} className="w-full flex justify-between items-center p-3 md:p-6 md:px-10">
                    <p className=" Mrs text-white text-3xl text-start ">{title}</p>

                    <div className="h-8 w-8 flex justify-center items-center border border-black rounded-full">
                        {
                            accordionOpen ? <FaMinus className="text-xl" /> : <FaPlus className="text-xl" />
                        }
                    </div>

                </button>
                <div className={`grid overflow-hidden bg-[#fff1] transition-all duration-200 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] p-3 md:p-5 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <p className="overflow-hidden md:px-5">{text}</p>
                </div>
            </div>
        </div>
    );
};

export default FaqItem;