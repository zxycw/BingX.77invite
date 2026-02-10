import { BookOpen, Clock, TrendingUp, Shield, Brain, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";

export default function Education() {
  const courses = {
    beginner: [
      {
        title: "加密貨幣基礎知識",
        description: "了解區塊鏈、比特幣和加密貨幣的基本概念",
        duration: "2小時",
        level: "入門",
        icon: BookOpen,
      },
      {
        title: "如何開始交易",
        description: "學習如何註冊、入金和進行第一筆交易",
        duration: "1.5小時",
        level: "入門",
        icon: Target,
      },
      {
        title: "交易術語解析",
        description: "掌握常用的交易專業術語和概念",
        duration: "1小時",
        level: "入門",
        icon: BookOpen,
      },
      {
        title: "技術分析入門",
        description: "學習K線圖、支撐阻力和常用技術指標",
        duration: "4小時",
        level: "入門",
        icon: TrendingUp,
      },
      {
        title: "風險管理策略",
        description: "掌握止損、倉位管理和風險控制技巧",
        duration: "3小時",
        level: "入門",
        icon: Shield,
      },
    ],
    intermediate: [
      {
        title: "交易心理學",
        description: "了解情緒對交易的影響並學習控制方法",
        duration: "2.5小時",
        level: "進階",
        icon: Brain,
      },
      {
        title: "進階技術分析",
        description: "深入學習波浪理論、斐波那契和高級圖表模式",
        duration: "6小時",
        level: "進階",
        icon: TrendingUp,
      },
      {
        title: "市場結構分析",
        description: "理解市場週期、流動性和機構行為",
        duration: "4小時",
        level: "進階",
        icon: Brain,
      },
    ],
  };

  const renderCourseCards = (courseList: typeof courses.beginner) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courseList.map((course, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <div className="flex items-start justify-between mb-2">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <course.icon className="text-orange-600" size={24} />
              </div>
              <Badge variant={course.level === "入門" ? "secondary" : course.level === "進階" ? "default" : "destructive"}>
                {course.level}
              </Badge>
            </div>
            <CardTitle className="text-xl">{course.title}</CardTitle>
            <CardDescription>{course.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-gray-600">
              <Clock size={16} className="mr-2" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-red-50 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            交易教學資源
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            系統化的課程設計，從零基礎到專業交易者，我們提供全面的學習路徑
          </p>
        </div>
      </section>

      {/* Course Tabs */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="beginner" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="beginner">入門課程</TabsTrigger>
              <TabsTrigger value="intermediate">進階課程</TabsTrigger>
            </TabsList>

            <TabsContent value="beginner" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">入門課程</h2>
                <p className="text-gray-600">適合完全沒有交易經驗的新手</p>
              </div>
              {renderCourseCards(courses.beginner)}
            </TabsContent>

            <TabsContent value="intermediate" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">進階課程</h2>
                <p className="text-gray-600">適合有一定基礎想要提升技能的交易者</p>
              </div>
              {renderCourseCards(courses.intermediate)}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            建議的學習路徑
          </h2>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: "基礎知識建立",
                description: "先了解加密貨幣和區塊鏈的基本概念，建立正確的認知基礎",
                duration: "1-2週",
              },
              {
                step: 2,
                title: "交易平台操作",
                description: "熟悉交易平台的各項功能，學會如何下單和管理倉位",
                duration: "1週",
              },
              {
                step: 3,
                title: "技術分析學習",
                description: "掌握K線圖和常用技術指標，學會基本的圖表分析方法",
                duration: "2-3週",
              },
              {
                step: 4,
                title: "風險管理實踐",
                description: "建立完整的風險管理系統，包括止損、倉位控制等",
                duration: "持續實踐",
              },
              {
                step: 5,
                title: "策略開發與優化",
                description: "根據自己的風格開發交易策略，並持續化和改進",
                duration: "持續進行",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                      <Badge variant="outline">{item.duration}</Badge>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            學習小叮嚀
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-orange-50 border-orange-200">
              <CardHeader>
                <CardTitle className="text-lg">循序漸進</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  不要急於求成，按照學習路徑一步步累積知識，打好基礎比什麼都重要。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg">實踐為主</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  理論學習後要及時實踐，建議先使用模擬賬戶練習，等熟練後再進行實盤交易。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-lg">記錄與復盤</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  養成記錄交易的習慣，定時復盤總結，從錯誤中學習才能持續進步。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}