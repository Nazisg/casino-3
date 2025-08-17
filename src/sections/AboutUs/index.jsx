export default function AboutUs() {
  return (
    <section id="about-us" className="px-4 py-10 lg:py-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-[24px] lg:text-[48px] font-bold glow-text text-center">Why Choose Casino?</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 pt-5 lg:pt-10 justify-items-center">
          <div className="flex flex-col rouneded-[8px] gap-2 w-full items-center cursor-pointer group bg-white/5 backdrop-blur-sm border border-[#FFD700] rounded-2xl p-4 text-center hover:bg-text-[#FFD700] transition-all duration-300 hover:scale-105">
            <h3 className="font-bold text-[#FFD700] lg:text-[20px]">Premium Games</h3>
            <p className="text-[14px] opacity-60">Exclusive collection of top-tier casino games from leading providers</p>
          </div>
          <div className="flex flex-col rouneded-[8px] gap-2 w-full items-center cursor-pointer group bg-white/5 backdrop-blur-sm border border-[#FFD700] rounded-2xl p-4 text-center hover:bg-text-[#FFD700] transition-all duration-300 hover:scale-105">
            <h3 className="font-bold text-[#FFD700] lg:text-[20px]">High Payouts</h3>
            <p className="text-[14px] opacity-60">Industry-leading RTP rates and massive progressive jackpots</p>
          </div>
          <div className="flex flex-col rouneded-[8px] gap-2 w-full items-center cursor-pointer group bg-white/5 backdrop-blur-sm border border-[#FFD700] rounded-2xl p-4 text-center hover:bg-text-[#FFD700] transition-all duration-300 hover:scale-105">
            <h3 className="font-bold text-[#FFD700] lg:text-[20px]">Secure & Licensed</h3>
            <p className="text-[14px] opacity-60">Fully licensed and regulated with bank-level security</p>
          </div>
          <div className="flex flex-col rouneded-[8px] gap-2 w-full items-center cursor-pointer group bg-white/5 backdrop-blur-sm border border-[#FFD700] rounded-2xl p-4 text-center hover:bg-text-[#FFD700] transition-all duration-300 hover:scale-105">
            <h3 className="font-bold text-[#FFD700] lg:text-[20px]">Instant Payouts</h3>
            <p className="text-[14px] opacity-60">Lightning-fast withdrawals and deposits with multiple payment options</p>
          </div>

        </div>
      </div>
    </section>
  );
}
