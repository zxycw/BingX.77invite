import { Link } from "react-router";
import { Mail, MessageCircle, Twitter, Youtube } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoImage from "figma:asset/b54f2ab8467a1d992ecda445955c425134b20d97.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <ImageWithFallback 
                src={logoImage} 
                alt="77 交易學院 Logo" 
                className="w-20 h-20 object-contain"
              />
              <span className="text-xl font-bold text-white">77 交易學院</span>
            </div>
            <p className="text-sm text-gray-400">
              專注於提供加密貨幣交易技術分析教學，幫助交易者建立穩健的投資策略。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">快速連結</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/education" className="text-sm hover:text-orange-400 transition-colors">
                  交易教學
                </Link>
              </li>
              <li>
                <Link to="/analysis" className="text-sm hover:text-orange-400 transition-colors">
                  市場分析
                </Link>
              </li>
              <li>
                <Link to="/guide" className="text-sm hover:text-orange-400 transition-colors">
                  新手指南
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-orange-400 transition-colors">
                  關於我們
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">學習資源</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-orange-400 transition-colors cursor-pointer">技術分析入門</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">風險管理指南</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">交易心理學</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">常見問題</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">聯繫方式</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Mail size={16} />
                <span>yigeyige20@gmail.com</span>
              </div>
              <div className="flex gap-4 mt-4">
                <a className="hover:text-orange-400 transition-colors flex items-center gap-2">
                  <MessageCircle size={20} />
                  <span>line:@376dbwaa</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400 text-center">
          <p>© 2026 77交易道. 本網站僅供教育用途，不構成投資建議。</p>
          <p className="mt-2">加密貨幣交易具有高風險，請謹慎投資。</p>
        </div>
      </div>
    </footer>
  );
}