export default function Banner() {
    return (
        <section className="py-10 lg:py-20 px-4">
            <div className="max-w-7xl mx-auto lg:text-center">
                <h2 className="text-[32px] md:text-[48px] xl:text-[64px] font-bold mb-3 ">Discover <span className="glow-text">Premium</span>  Casinos</h2>
                <p className="text-[#B3B9C8] lg:max-w-[90%] mx-auto  lg:text-center">Expert reviews, exclusive bonuses, and trusted recommendations for the <span className="glow-text">UK's top-rated</span> online casinos</p>
                <div className="lg:w-[60%] mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 pt-10 justify-items-center">
                        <div className="flex flex-col rouneded-[8px] gap-2 w-full items-center cursor-pointer group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                               <h3 className="font-bold text-[#FFD700] lg:text-[20px]">50M+</h3>
                            <p className="text-[14px]">Total Winnings Paid</p>
                        </div>
                        <div className="flex flex-col rouneded-[8px] gap-2 w-full items-center cursor-pointer group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                               <h3 className="font-bold text-[#FFD700] lg:text-[20px]">500K+</h3>
                            <p className="text-[14px]">Happy Players</p>
                        </div>
                        <div className="flex flex-col rouneded-[8px] gap-2 w-full items-center cursor-pointer group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                               <h3 className="font-bold text-[#FFD700] lg:text-[20px]">5000+</h3>
                            <p className="text-[14px]">Casino Games</p>
                        </div>
                        <div className="flex flex-col rouneded-[8px] gap-2 w-full items-center cursor-pointer group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                               <h3 className="font-bold text-[#FFD700] lg:text-[20px]">24/7</h3>
                            <p className="text-[14px]">Expert Support</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}
