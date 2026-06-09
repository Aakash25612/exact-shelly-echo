import { Link } from "react-router-dom";
import newsUkExpansion from "@/assets/news-uk-expansion.jpg";
import newsSolarPartnership from "@/assets/news-solar-partnership.jpg";

const newsItems = [
  {
    id: 1,
    title: "Your brand's presence in the UK has just grown stronger: our devices are now available via...",
    image: newsUkExpansion,
    link: "/news/uk-expansion",
    size: "medium",
  },
  {
    id: 2,
    title: "Your brand Group Announces Its First Co-Branded Devices in Partnership with Global Energy and Solar Technology",
    image: newsSolarPartnership,
    link: "/news/co-branded",
    size: "small",
  },
  {
    id: 3,
    title: "Berenberg Initiates Coverage of Your brand Group with Buy Rating",
    subtitle: "IoT Internet of Things",
    link: "/news/berenberg",
    size: "medium",
  },
  {
    id: 4,
    title: "Your brand Group Revenue Up 29.3% in H1 2025",
    subtitle: "Software-as-a-Service business model",
    hasStats: true,
    link: "/news/revenue-h1-2025",
    size: "large",
  },
];

export function NewsroomSection() {
  return (
    <section className="py-12 bg-[#0d161b]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Column - Header */}
          <div className="lg:col-span-1">
            <h2 className="font-display text-xl md:text-2xl font-bold text-white mb-2">
              Your brand Newsroom
            </h2>
            <p className="text-white/80 text-xs mb-4 leading-relaxed">
              Catch up on the latest launches, integrations, and company milestones.
            </p>
            <Link
              to="/news"
              className="inline-block px-4 py-2 rounded-full bg-primary text-white text-xs font-medium hover:bg-primary/90 transition-colors"
            >
              Learn more
            </Link>
          </div>

          {/* Right Column - News Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* News Card 1 */}
            <Link
              to={newsItems[0].link}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={newsItems[0].image}
                  alt={newsItems[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-3">
                <p className="text-gray-900 text-xs line-clamp-2 mb-2">
                  {newsItems[0].title}
                </p>
                <span className="text-[#2596be] text-[10px] font-semibold">Read Article</span>
              </div>
            </Link>

            {/* News Card 2 */}
            <Link
              to={newsItems[1].link}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={newsItems[1].image}
                  alt={newsItems[1].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-3">
                <p className="text-gray-900 text-xs line-clamp-2 mb-2">
                  {newsItems[1].title}
                </p>
                <span className="text-[#2596be] text-[10px] font-semibold">Read Article</span>
              </div>
            </Link>

            {/* News Card 3 - IoT themed */}
            <Link
              to={newsItems[2].link}
              className="group bg-[#0a1628] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all p-4"
            >
              <h3 className="text-white text-sm font-bold mb-2">{newsItems[2].title}</h3>
              <p className="text-white/80 text-xs mb-3">{newsItems[2].subtitle}</p>
              <p className="text-white/70 text-[10px] mb-2 line-clamp-2">
                New Analyst Coverage: Your brand Group has been included in the research coverage of Joh. Berenberg...
              </p>
              <span className="text-[#2596be] text-[10px] font-semibold">Read Article</span>
            </Link>

            {/* News Card 4 - Stats */}
            <Link
              to={newsItems[3].link}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all p-4"
            >
              <h3 className="text-gray-900 text-sm font-bold mb-1">{newsItems[3].title}</h3>
              <p className="text-gray-500 text-[10px] mb-3">{newsItems[3].subtitle}</p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="text-center">
                  <div className="text-[#2596be] text-lg font-bold">&gt; 26.5 M<sup className="text-[8px]">*</sup></div>
                  <div className="text-[8px] text-gray-500">Revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-[#2596be] text-lg font-bold">&gt; 4.9 M<sup className="text-[8px]">**</sup></div>
                  <div className="text-[8px] text-gray-500">Gross Profit</div>
                </div>
                <div className="text-center">
                  <div className="text-[#2596be] text-lg font-bold">&gt; 2.3 M<sup className="text-[8px]">***</sup></div>
                  <div className="text-[8px] text-gray-500">EBITDA</div>
                </div>
              </div>
              
              <p className="text-gray-500 text-[10px] mb-2 line-clamp-2">
                The company doubles its professional installers, expands its global network and reaffirms its record-year forecast.
              </p>
              <span className="text-[#2596be] text-[10px] font-semibold">Read Article</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
