import FaqItem from "./FaqItem";

const FAQ = () => {
    return (
        <div className='bg-[#A9E1FE] border-black border-y'>
            <div className="container py-16 w-full max-w-5xl">
                <h3 className='uppercase Mrs text-center text-white text-5xl md:text-7xl '>tokenomics</h3>

                <div className="pt-12">
                    <FaqItem
                        title={"Why VIKTOR?"}
                        text={"The real question is: why not? $VIKTOR is riding the waves of meme coins on the rising BASE blockchain. VIKTOR is programmed."}
                    ></FaqItem>
                    <FaqItem
                        title={"What is the contract address?"}
                        text={"The real question is: why not? $VIKTOR is riding the waves of meme coins on the rising BASE blockchain. VIKTOR is programmed."}
                    ></FaqItem>
                    <FaqItem
                        title={"Where can we buy?"}
                        text={"The real question is: why not? $VIKTOR is riding the waves of meme coins on the rising BASE blockchain. VIKTOR is programmed."}
                    ></FaqItem>
                    <FaqItem
                        title={"How can I contact the team?"}
                        text={"The real question is: why not? $VIKTOR is riding the waves of meme coins on the rising BASE blockchain. VIKTOR is programmed."}
                    ></FaqItem>
                </div>
            </div>
        </div>
    );
};

export default FAQ;