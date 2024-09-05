import MarqueeItem from "./MarqueeItem";

const MarqLogo = () => {
    return (
        <div className="bg-[#FFBC00] border-black border-y">
            <marquee className="" behavior="" direction="">
                <div className="flex justify-center items-center gap-3">
                    <MarqueeItem></MarqueeItem>
                    <MarqueeItem></MarqueeItem>
                    <MarqueeItem></MarqueeItem>
                    <MarqueeItem></MarqueeItem>
                    <MarqueeItem></MarqueeItem>
                    <MarqueeItem></MarqueeItem>
                    <MarqueeItem></MarqueeItem>
                    <MarqueeItem></MarqueeItem>
                    <MarqueeItem></MarqueeItem>
                    <MarqueeItem></MarqueeItem>
                    <MarqueeItem></MarqueeItem>
                    <MarqueeItem></MarqueeItem>
                    <MarqueeItem></MarqueeItem>
                    <MarqueeItem></MarqueeItem>
                    <MarqueeItem></MarqueeItem>
                    <MarqueeItem></MarqueeItem>
                </div>
            </marquee>
        </div>
    );
};

export default MarqLogo;