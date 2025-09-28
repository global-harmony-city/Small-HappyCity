import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Area, AreaChart } from 'recharts';
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, DollarSign, Users, Target, Award } from 'lucide-react';

const WageOptimizationDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('2024');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // サンプルデータ
  const procurementData = [
    { category: '清掃業務', current: 280, appropriate: 350, improvement: 25, vendors: 12 },
    { category: '警備業務', current: 320, appropriate: 420, improvement: 31, vendors: 8 },
    { category: '印刷業務', current: 150, appropriate: 180, improvement: 20, vendors: 15 },
    { category: 'ビルメンテナンス', current: 450, appropriate: 580, improvement: 29, vendors: 6 },
    { category: 'システム開発', current: 800, appropriate: 920, improvement: 15, vendors: 4 },
  ];

  const monthlyTrend = [
    { month: '1月', before: 280, after: 320, target: 350 },
    { month: '2月', before: 285, after: 335, target: 350 },
    { month: '3月', before: 290, after: 345, target: 350 },
    { month: '4月', before: 295, after: 350, target: 350 },
    { month: '5月', before: 300, after: 350, target: 350 },
    { month: '6月', before: 305, after: 350, target: 350 },
  ];

  const comparisonData = [
    { city: '霧島市', current: 75, target: 85 },
    { city: '指宿市', current: 68, target: 85 },
    { city: '薩摩川内市', current: 82, target: 85 },
    { city: '鹿屋市', current: 71, target: 85 },
    { city: '県平均', current: 74, target: 85 },
  ];

  const impactData = [
    { name: '地域経済効果', value: 2.4, unit: '億円' },
    { name: '賃金向上', value: 12.5, unit: '%' },
    { name: '企業収益改善', value: 8.3, unit: '%' },
    { name: '雇用創出', value: 45, unit: '人' },
  ];

  const COLORS = ['#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* ヘッダー */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            賃金適正化ダッシュボード
          </h1>
          <p className="text-gray-600">
            KAGOSHIMA LINK - 公共調達単価適正化による地域経済活性化
          </p>
        </div>

        {/* フィルター */}
        <div className="bg-white rounded-lg shadow mb-6 p-4">
          <div className="flex flex-wrap gap-4">
            <select 
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="2024">2024年度</option>
              <option value="2023">2023年度</option>
            </select>
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">全業務カテゴリ</option>
              <option value="cleaning">清掃業務</option>
              <option value="security">警備業務</option>
              <option value="maintenance">メンテナンス</option>
            </select>
          </div>
        </div>

        {/* KPIカード */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">適正化達成率</p>
                <p className="text-2xl font-bold text-green-600">78.5%</p>
                <p className="text-xs text-green-500 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +5.2% vs 前月
                </p>
              </div>
              <Target className="w-8 h-8 text-green-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">平均賃金向上率</p>
                <p className="text-2xl font-bold text-blue-600">12.5%</p>
                <p className="text-xs text-blue-500 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +2.1% vs 前年同期
                </p>
              </div>
              <DollarSign className="w-8 h-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">参加事業者数</p>
                <p className="text-2xl font-bold text-purple-600">156社</p>
                <p className="text-xs text-purple-500 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +23社 vs 前年度
                </p>
              </div>
              <Users className="w-8 h-8 text-purple-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">経済波及効果</p>
                <p className="text-2xl font-bold text-orange-600">2.4億円</p>
                <p className="text-xs text-orange-500 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +0.8億円 vs 前年度
                </p>
              </div>
              <Award className="w-8 h-8 text-orange-600" />
            </div>
          </div>
        </div>

        {/* メインコンテンツ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* 業務カテゴリ別適正化状況 */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">業務カテゴリ別適正化状況</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={procurementData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" angle={-45} textAnchor="end" height={100} />
                <YAxis />
                <Tooltip formatter={(value) => [`${value}万円`, '']} />
                <Bar dataKey="current" fill="#ef4444" name="現在単価" />
                <Bar dataKey="appropriate" fill="#10b981" name="適正単価" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* 月次トレンド */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">月次改善トレンド</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value}万円`, '']} />
                <Line type="monotone" dataKey="before" stroke="#ef4444" name="改善前" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="after" stroke="#10b981" name="改善後" strokeWidth={2} />
                <Line type="monotone" dataKey="target" stroke="#f59e0b" name="目標値" strokeDasharray="10 5" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 自治体比較と影響分析 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* 自治体間比較 */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">自治体間適正化達成率比較</h3>
            <div className="space-y-4">
              {comparisonData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="font-medium">{item.city}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${item.current >= item.target ? 'bg-green-500' : 'bg-yellow-500'}`}
                        style={{ width: `${(item.current / item.target) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">{item.current}%</span>
                    {item.current >= item.target ? 
                      <CheckCircle className="w-4 h-4 text-green-500" /> : 
                      <AlertTriangle className="w-4 h-4 text-yellow-500" />
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 経済効果インパクト */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">経済効果インパクト</h3>
            <div className="space-y-4">
              {impactData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">{item.name}</span>
                  <div className="text-right">
                    <span className="text-xl font-bold text-blue-600">{item.value}</span>
                    <span className="text-sm text-gray-500 ml-1">{item.unit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 詳細分析とアクション */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 課題業務 */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4 text-red-600">改善要注意業務</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <span className="font-medium">清掃業務</span>
                <span className="text-sm text-red-600 font-medium">20%未達</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <span className="font-medium">警備業務</span>
                <span className="text-sm text-yellow-600 font-medium">15%未達</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <span className="font-medium">印刷業務</span>
                <span className="text-sm text-yellow-600 font-medium">17%未達</span>
              </div>
            </div>
          </div>

          {/* 改善提案 */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4 text-blue-600">AI改善提案</h3>
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="font-medium text-sm">最低賃金改定反映</p>
                <p className="text-xs text-gray-600">清掃業務単価を12%調整推奨</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <p className="font-medium text-sm">資材費高騰対応</p>
                <p className="text-xs text-gray-600">メンテナンス業務の見直し必要</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <p className="font-medium text-sm">競争促進策</p>
                <p className="text-xs text-gray-600">参加事業者増加で単価適正化</p>
              </div>
            </div>
          </div>

          {/* 次期アクション */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4 text-green-600">推奨アクション</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-sm">単価見直し実施</p>
                  <p className="text-xs text-gray-600">清掃・警備業務優先</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-sm">事業者説明会開催</p>
                  <p className="text-xs text-gray-600">新単価基準の周知</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-sm">効果測定強化</p>
                  <p className="text-xs text-gray-600">四半期レビュー実施</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* フッター */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>KAGOSHIMA LINK BPaaS - AI人格「智子」による賃金適正化支援</p>
          <p>最終更新: 2024年6月15日 10:30 JST</p>
        </div>
      </div>
    </div>
  );
};

export default WageOptimizationDashboard;