import { TrendingUp, TrendingDown, Calendar, Eye } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export default function Analysis() {
  const analyses = [
    {
      title: "比特幣技術分析：關鍵支撐位觀察",
      date: "2026-01-25",
      category: "技術分析",
      trend: "neutral",
      views: 1234,
      summary:
        "比特幣目前在關鍵支撐位附近震盪，需要關注成交量變化和突破方向。本文深入分析當前市場結構和可能的價格走勢。",
    },
    {
      title: "以太坊升級後的市場反應分析",
      date: "2026-01-23",
      category: "基本面",
      trend: "bullish",
      views: 987,
      summary:
        "隨著以太坊最新升級完成，市場反應積極。本文分析升級對價格的潛在影響和後續可能的發展趨勢。",
    },
    {
      title: "山寨幣季節即將來臨？市場資金流向分析",
      date: "2026-01-20",
      category: "市場觀察",
      trend: "bullish",
      views: 1567,
      summary:
        "通過分析比特幣市值佔比和資金流向，探討山寨幣是否即將迎來上漲週期，以及投資者應該如何應對。",
    },
    {
      title: "短期調整還是趨勢反轉？多維度解析",
      date: "2026-01-18",
      category: "技術分析",
      trend: "bearish",
      views: 892,
      summary:
        "市場出現回調信號，本文從技術面、資金面和情緒面多角度分析，判斷這是短期調整還是趨勢反轉的開始。",
    },
    {
      title: "穩定幣市值變化與市場流動性",
      date: "2026-01-15",
      category: "數據分析",
      trend: "neutral",
      views: 756,
      summary:
        "穩定幣市值是衡量市場流動性的重要指標，本文分析近期穩定幣市值變化對市場的潛在影響。",
    },
    {
      title: "週度市場回顧與下週展望",
      date: "2026-01-14",
      category: "市場回顧",
      trend: "neutral",
      views: 1345,
      summary:
        "回顧本週加密貨幣市場的主要動態，分析重要事件對價格的影響，並對下週市場走勢進行展望。",
    },
  ];

  const marketStats = [
    {
      label: "比特幣市值佔比",
      value: "48.2%",
      change: "+1.2%",
      trend: "up",
    },
    {
      label: "總市值",
      value: "$2.1T",
      change: "+3.5%",
      trend: "up",
    },
    {
      label: "24h交易量",
      value: "$98.5B",
      change: "-2.1%",
      trend: "down",
    },
    {
      label: "恐懼貪婪指數",
      value: "62",
      change: "貪婪",
      trend: "neutral",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-red-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">市場分析</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              深入的市場分析和交易策略，幫助你理解市場動態並做出明智決策
            </p>
          </div>

          {/* Market Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {marketStats.map((stat, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div
                    className={`text-sm flex items-center gap-1 ${
                      stat.trend === "up"
                        ? "text-green-600"
                        : stat.trend === "down"
                        ? "text-red-600"
                        : "text-gray-600"
                    }`}
                  >
                    {stat.trend === "up" && <TrendingUp size={14} />}
                    {stat.trend === "down" && <TrendingDown size={14} />}
                    <span>{stat.change}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Analysis */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">精選分析</h2>
            <p className="text-gray-600">最新的市場洞察和交易觀點</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative h-48">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1694219782948-afcab5c095d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXRjb2luJTIwYmxvY2tjaGFpbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY5NTI1MDMyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="市場分析"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-600">看漲</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <Calendar size={14} />
                  <span>2026-01-25</span>
                  <span>•</span>
                  <Eye size={14} />
                  <span>1,234 次瀏覽</span>
                </div>
                <CardTitle className="text-xl">比特幣技術分析：關鍵支撐位觀察</CardTitle>
                <CardDescription>
                  比特幣目前在關鍵支撐位附近震盪，需要關注成交量變化和突破方向。本文深入分析當前市場結構和可能的價格走勢。
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative h-48">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1639825752750-5061ded5503b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMHRyYWRpbmclMjBjaGFydHxlbnwxfHx8fDE3Njk1MjUwMzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="市場分析"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-blue-600">基本面</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <Calendar size={14} />
                  <span>2026-01-23</span>
                  <span>•</span>
                  <Eye size={14} />
                  <span>987 次瀏覽</span>
                </div>
                <CardTitle className="text-xl">以太坊升級後的市場反應分析</CardTitle>
                <CardDescription>
                  隨著以太坊最新升級完成，市場反應積極。本文分析升級對價格的潛在影響和後續可能的發展趨勢。
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* All Analyses */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">所有分析文章</h3>
            <div className="space-y-4">
              {analyses.map((analysis, index) => (
                <Card
                  key={index}
                  className="hover:shadow-md transition-shadow cursor-pointer"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline">{analysis.category}</Badge>
                          <Badge
                            className={
                              analysis.trend === "bullish"
                                ? "bg-green-600"
                                : analysis.trend === "bearish"
                                ? "bg-red-600"
                                : "bg-gray-600"
                            }
                          >
                            {analysis.trend === "bullish"
                              ? "看漲"
                              : analysis.trend === "bearish"
                              ? "看跌"
                              : "中性"}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl mb-2">{analysis.title}</CardTitle>
                        <CardDescription className="mb-3">{analysis.summary}</CardDescription>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{analysis.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye size={14} />
                            <span>{analysis.views.toLocaleString()} 次瀏覽</span>
                          </div>
                        </div>
                      </div>
                      {analysis.trend === "bullish" ? (
                        <TrendingUp className="text-green-600 flex-shrink-0" size={32} />
                      ) : analysis.trend === "bearish" ? (
                        <TrendingDown className="text-red-600 flex-shrink-0" size={32} />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0" />
                      )}
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 px-4 bg-orange-50">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border-orange-200">
            <CardHeader>
              <CardTitle className="text-lg">風險提示</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                本網站提供的所有市場分析和觀點僅供參考，不構成投資建議。加密貨幣市場波動劇烈，投資有風險，請根據自己的風險承受能力謹慎決策。
              </p>
              <p className="text-gray-700">
                我們鼓勵您在做出任何投資決策前，進行充分的研究和分析，並考慮諮詢專業的財務顧問。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
