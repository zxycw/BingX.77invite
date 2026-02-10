import { ArrowRight, BookOpen, TrendingUp, Shield, Users, Award, CheckCircle, MessageCircle } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-red-50 py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
              🎓 交易技術道
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              從零開始
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                {" "}
                掌握交易{" "}
              </span>
              建立穩健投資策略
            </h1>
            <p className="text-lg text-gray-600">
              我們致力於提升系統化的交易技術教學。無論你是新手還是有經驗的交易者，都能在這裡找到適合的學習資源。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://bingxdao.com/invite/WEJR1B" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
                >
                  使用邀請碼註冊 BingX
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </a>
              <a href="https://lin.ee/XNtYLNb" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <MessageCircle className="mr-2" size={20} />
                  聯絡我們
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </a>
              <Link to="/guide">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  查看新手指南
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500 border-2 border-white" />
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">1,500+</span> 位學員已加入
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1639825752750-5061ded5503b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMHRyYWRpbmclMjBjaGFydHxlbnwxfHx8fDE3Njk1MjUwMzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="加密貨幣交易圖表"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-green-600" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">+99.5%</div>
                  <div className="text-sm text-gray-600">學員平均進步率</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              為什麼選擇我們？
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              我們專注於提供真正有價值的內容，幫助你建立長期穩定的交易能力
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="text-orange-600" size={24} />
                </div>
                <CardTitle>系統化教學</CardTitle>
                <CardDescription>
                  從基礎到進階，循序漸進的課程，讓你穩固掌握交易知識
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="text-blue-600" size={24} />
                </div>
                <CardTitle>實戰分析</CardTitle>
                <CardDescription>
                  定期更新的市場分析和交易策略，理論結合實踐
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="text-green-600" size={24} />
                </div>
                <CardTitle>風險管理</CardTitle>
                <CardDescription>
                  深入講解風險控制和資金管理，保護你的投資本金
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1762318986860-a7b18dd0da02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBlZHVjYXRpb24lMjBsZWFybmluZ3xlbnwxfHx8fDE3Njk1MjUwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="金融教育學習"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              你將學到什麼？
            </h2>
            <p className="text-lg text-gray-600">
              我們的教學涵蓋交易的各個方面，確保你獲得全面的知識體系
            </p>
            <div className="space-y-4">
              {[
                "技術分析基礎與進階技巧",
                "風險管理與資金分配策略",
                "市場心理學與情緒控制",
                "交易計劃的制定與執行",
                "常見交易陷阱與避免",
                "實戰案例分析與復盤",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <Link to="/education">
              <Button
                size="lg"
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-50"
              >
                探索所有課程
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Invitation Code Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            使用我的邀請碼，獲得額外優惠
          </h2>
          <p className="text-xl text-orange-100">
            註冊 BingX 時使用專屬邀請碼，不僅能享受交易手續費減免，還能獲得我們提供的免費交易策略指導
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="text-sm text-orange-100 mb-2">專屬邀請碼</div>
            <div className="text-4xl md:text-5xl font-bold mb-6 tracking-wider">
              WEJR1B
            </div>
            <a href="https://bingxdao.com/invite/WEJR1B" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
              >
                使用邀請碼註冊 BingX
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </a>
            <p className="text-sm text-orange-100 mt-4">
              * 使用邀請碼註冊後，請聯繫我們獲取專屬學習資源
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Award className="mx-auto mb-3" size={32} />
              <div className="font-semibold mb-2">手續費減免</div>
              <div className="text-sm text-orange-100">享受交易手續費優惠</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Users className="mx-auto mb-3" size={32} />
              <div className="font-semibold mb-2">專屬社群</div>
              <div className="text-sm text-orange-100">加入我們的學習社群</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <BookOpen className="mx-auto mb-3" size={32} />
              <div className="font-semibold mb-2">免費課程</div>
              <div className="text-sm text-orange-100">獲得新手、進階教學資源</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            準備開始你的交易之旅了嗎？
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            從學習基礎知識開始，循序漸進地建立你的交易技能。我們會一直陪伴你成長。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/guide">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
              >
                查看新手指南
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/education">
              <Button size="lg" variant="outline">
                瀏覽教學資源
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}