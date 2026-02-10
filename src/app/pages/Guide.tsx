import { CheckCircle2, AlertCircle, Info, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/app/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";
import { Button } from "@/app/components/ui/button";

export default function Guide() {
  const steps = [
    {
      title: "註冊 BingX 帳戶",
      description: "使用我們的邀請碼註冊，享受手續費優惠",
      details: [
        "前往 BingX 官方網站",
        "點擊「註冊」按鈕",
        "填寫郵箱和密碼",
        "在邀請碼欄位輸入：WEJR1B",
        "完成郵箱驗證",
      ],
    },
    {
      title: "完成身份驗證",
      description: "提高帳戶安全性和交易限額",
      details: [
        "登入帳戶後，前往「身份驗證」頁面",
        "選擇驗證級別（基礎或進階）",
        "準備身份證件照片",
        "按照指示完成拍攝和上傳",
        "等待審核（通常2分鐘內審核完成）",
      ],
    },
    {
      title: "聯繫我們",
      description: "獲得專屬學習資源和交易指導",
      details: [
        "透過 LINE 聯繫我們：@376dbwaa",
        "或點擊網站上的「聯繫我們」按鈕",
        "告知我們你已完成註冊",
        "獲得免費交易教學資源",
        "加入專屬交易社群",
      ],
    },
    {
      title: "開始交易",
      description: "進行你的第一筆交易",
      details: [
        "熟悉交易界面和各項功能",
        "選擇想要交易的幣種",
        "決定交易類型（現貨或合約）",
        "設置合理的止損和止盈",
        "開始小額交易，積累經驗",
      ],
    },
  ];

  const faqs = [
    {
      question: "使用邀請碼註冊有什麼好處？",
      answer:
        "使用我們的邀請碼 BINGX2024 註冊，你可以享受交易手續費折扣，同時還能獲得我們提供的免費交易教學資源和社群支持。這對新手來說是非常有價值的。",
    },
    {
      question: "新手應該從現貨還是合約開始？",
      answer:
        "強烈建議新手從現貨交易開始。現貨交易風險較低，可以幫助你熟悉市場和交易流程。當你有了足夠的經驗和知識後，再考慮進入合約交易。",
    },
    {
      question: "第一次交易應該投入多少資金？",
      answer:
        "建議從小額開始，使用你可以承受損失的閒錢。記住，交易的目的是學習和積累經驗，而不是一夜暴富。",
    },
    {
      question: "如何設置合理的止損？",
      answer:
        "止損應該基於技術分析設置在關鍵支撐位下方，一般建議單筆交易的風險不超過總資金的 3%。例如，如果你有 10,000 元本金，單筆交易最多虧損 300 元。",
    },
    {
      question: "需要多久才能成為成功的交易者？",
      answer:
        "成為成功的交易者需要時間和實踐。一般來說，至少需要 6-12 個月的學習和實踐才能建立起穩定的交易系統。保持耐心，持續學習，記錄和復盤每一筆交易。",
    },
  ];

  const commonMistakes = [
    {
      title: "過度交易",
      description: "頻繁進出市場會增加手續費成本和犯錯機率。學會耐心等待好的交易機會。",
    },
    {
      title: "不設止損",
      description: "沒有止損就像開車不繫安全帶，一次意外就可能造成巨大損失。",
    },
    {
      title: "追漲殺跌",
      description: "看到價格上漲就買入，下跌就賣出，這是最常見也最致命的錯誤。",
    },
    {
      title: "重倉交易",
      description: "把所有資金投入一個交易，風險過於集中，一旦判斷錯誤後果嚴重。",
    },
    {
      title: "忽視風險管理",
      description: "只關注盈利而不關注風險，長期來看註定失敗。",
    },
    {
      title: "情緒化交易",
      description: "讓恐懼和貪婪主導決策，而不是根據分析和計劃進行交易。",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-red-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">新手完整指南</h1>
          <p className="text-lg text-gray-600">
            從註冊到第一筆交易，我們為你準備了詳細的步驟說明
          </p>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Alert className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
            <Info className="h-5 w-5 text-orange-600" />
            <AlertTitle className="text-orange-900 font-semibold">
              使用我們的邀請碼註冊 BingX
            </AlertTitle>
            <AlertDescription className="text-orange-800">
              邀請碼：<span className="font-bold text-lg">WEJR1B</span> - 享受手續費優惠並獲得免費學習資源
              <Button
                size="sm"
                className="ml-4 bg-orange-600 hover:bg-orange-700"
                onClick={() => window.open('https://bingxdao.com/invite/WEJR1B', '_blank')}
              >
                立即註冊
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            四步開始交易
          </h2>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                      <CardDescription>{step.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="text-green-600 mt-0.5 flex-shrink-0" size={20} />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            新手常見錯誤
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            了解並避免這些常見錯誤，可以讓你少走很多彎路
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonMistakes.map((mistake, index) => (
              <Card key={index} className="bg-white border-red-100">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="text-red-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <CardTitle className="text-lg mb-2">{mistake.title}</CardTitle>
                      <CardDescription className="text-gray-600">
                        {mistake.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            常見問題解答
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">準備好開始了嗎？</h2>
          <p className="text-xl text-orange-100">
            使用我們的邀請碼註冊，開啟你的交易之旅
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
            <div className="text-sm text-orange-100 mb-2">邀請碼</div>
            <div className="text-3xl md:text-4xl font-bold mb-4 tracking-wider">WEJR1B</div>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 w-full">
              複製並註冊
            </Button>
          </div>
          <p className="text-sm text-orange-100">
            註冊後聯繫我們，獲得專屬學習資源和社群邀請
          </p>
        </div>
      </section>
    </div>
  );
}