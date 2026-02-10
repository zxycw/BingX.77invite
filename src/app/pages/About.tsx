import { Target, Users, Award, Heart, TrendingUp, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "教育為先",
      description: "我們相信知識是最好的投資。提供高質量的教育內容是我們的首要任務。",
    },
    {
      icon: Heart,
      title: "誠信透明",
      description: "我們坦誠分享交易的風險和挑戰，不做誇大宣傳，只提供真實有用的資訊。",
    },
    {
      icon: Users,
      title: "社群互助",
      description: "建立一個互相支持、共同成長的交易者社群，讓每個人都能從中受益。",
    },
    {
      icon: TrendingUp,
      title: "持續進步",
      description: "市場不斷變化，我們也持續學習和改進，為會員提供最新最實用的內容。",
    },
  ];

  const stats = [
    { number: "1500+", label: "學員" },
    { number: "200+", label: "教學文章" },
    { number: "50+", label: "市場分析" },
    { number: "95%", label: "滿意度" },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-red-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">關於我們</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            我們是一群熱愛加密貨幣交易的交易者，致力於幫助更多人建立正確的交易觀念和穩健的投資策略
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1762318986860-a7b18dd0da02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBlZHVjYXRpb24lMjBsZWFybmluZ3xlbnwxfHx8fDE3Njk1MjUwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="我們的使命"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">我們的使命</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              在加密貨幣市場中，太多人因為缺乏正確的知識遭受損失。我們看到了這個問題，決心做出改變。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              我們不是簡單地推廣交易，而是希望通過提供系統化的教育，幫助每個人建立起自己的交易能力。我們相信，只有當交易者真正理解市場、掌握技能，才能在這個市場中長期生存並獲得成功。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              更重要的是，我們希望通過教育讓你成為一個懂得如何使用工具、控制風險的成熟交易者。
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">我們的價值觀</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              這些核心價值觀指導著我們的每一個決策和行動
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">我們的成績</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              這些數字代表著我們和學員共同的努力成果
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">我們的方法</h2>
            <p className="text-lg text-gray-600">
              我們如何幫助你成為更好的交易者
            </p>
          </div>
          <div className="space-y-6">
            <Card className="bg-white">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">系統化學習路徑</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      我們設計了從入門到進階的完整課程體系，確保你能循序漸進地掌握交易技能。每個階段都有明確的學習目標和實踐任務。
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">實戰導向教學</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      理論知識固然重要，但我們更注重實戰能力的培養。通過真實案例分析、模擬交易練習，讓你在安全的環境中積累經驗。
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="text-green-600" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">社群支持</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      加入我們的學習社群，與其他交易者交流經驗、分享心得。在這裡，你可以找到志同道合的夥伴，共同成長進步。
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              為什麼我們不一樣？
            </h2>
          </div>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              市面上有很多推廣交易所的網站但大多數只是簡單地推薦註冊，缺乏真正有價值的教育內容。我們不同。
            </p>
            <p>
              我們花費大量時間創建高質量的教學內容，不是為了快速獲利，而是為了建立長期的信任關係。我們知道，只有當你在交易中取得成功，我們的價值才能真正體現。
            </p>
            <p>
              我們也會坦誠地告訴你交易的風險和挑戰。我們不會向你承諾快速致富，因為那不現實。相反，我們會教你如何建立穩健的交易系統，如何管理風險，如何在市場中長期生存。
            </p>
            <p>
              這就是我們的承諾：提供真實、有用、負責任的教育內容，幫助你成為一個更好的交易者。
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">加入我們的學習社群</h2>
          <p className="text-xl text-orange-100">
            使用邀請碼 <span className="font-bold">WEJR1B</span> 註冊，開始你的交易學習之旅
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a 
              href="https://bingxdao.com/invite/WEJR1B" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors inline-block"
            >
              立即註冊
            </a>
            <a 
              href="https://lin.ee/XNtYLNb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/30 inline-block"
            >
              聯繫我們
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}