import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Area, AreaChart, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Clock, Users, TrendingDown, TrendingUp, AlertCircle, CheckCircle, Brain, FileText, Calendar, Award, Zap, Heart } from 'lucide-react';

const SpecializedStaffDashboard = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedPeriod, setSelectedPeriod] = useState('current');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // 職種別データ
  const staffCategories = [
    { 
      category: '保育士', 
      total: 45, 
      aiAssisted: 38, 
      timeReduction: 32, 
      satisfactionScore: 4.2,
      stress: 'low',
      efficiency: 85
    },
    { 
      category: '教員', 
      total: 120, 
      aiAssisted: 95, 
      timeReduction: 28, 
      satisfactionScore: 4.0,
      stress: 'medium',
      efficiency: 78
    },
    { 
      category: '看護師', 
      total: 68, 
      aiAssisted: 52, 
      timeReduction: 25, 
      satisfactionScore: 3.8,
      stress: 'medium',
      efficiency: 82
    },
    { 
      category: '介護士', 
      total: 38, 
      aiAssisted: 32, 
      timeReduction: 35, 
      satisfactionScore: 4.1,
      stress: 'low',
      efficiency: 88
    },
    { 
      category: '社会福祉士', 
      total: 25, 
      aiAssisted: 20, 
      timeReduction: 30, 
      satisfactionScore: 4.3,
      stress: 'low',
      efficiency: 90
    }
  ];

  // 業務効率化データ
  const efficiencyData = [
    { task: '書類作成', before: 120, after: 45, aiContribution: 75, satisfaction: 4.5 },
    { task: '報告書作成', before: 90, after: 35, aiContribution: 55, satisfaction: 4.2 },
    { task: 'スケジュール管理', before: 60, after: 25, aiContribution: 35, satisfaction: 4.0 },
    { task: 'データ入力', before: 80, after: 20, aiContribution: 60, satisfaction: 4.6 },
    { task: '会議準備', before: 45, after: 15, aiContribution: 30, satisfaction: 4.1 },
    { task: '研修資料作成', before: 100, after: 40, aiContribution: 60, satisfaction: 4.3 }
  ];

  // 月次改善トレンド
  const monthlyTrend = [
    { month: '1月', workload: 85, satisfaction: 3.2, efficiency: 65, aiAdoption: 45 },
    { month: '2月', workload: 80, satisfaction: 3.5, efficiency: 70, aiAdoption: 55 },
    { month: '3月', workload: 75, satisfaction: 3.8, efficiency: 75, aiAdoption: 65 },
    { month: '4月', workload: 70, satisfaction: 4.0, efficiency: 80, aiAdoption: 75 },
    { month: '5月', workload: 65, satisfaction: 4.2, efficiency: 85, aiAdoption: 82 },
    { month: '6月', workload: 60, satisfaction: 4.4, efficiency: 88, aiAdoption: 88 }
  ];

  // AI活用スキルレベル
  const skillLevels = [
    { level: '初級', count: 45, color: '#ef4444' },
    { level: '中級', count: 128, color: '#f59e0b' },
    { level: '上級', count: 89, color: '#10b981' },
    { level: 'エキスパート', count: 34, color: '#8b5cf6' }
  ];

  // ストレス・満足度レーダーチャート
  const wellbeingData = [
    { subject: '業務負荷', A: 65, B: 90, fullMark: 100 },
    { subject: '時間効率', A: 85, B: 60, fullMark: 100 },
    { subject: '職場満足度', A: 88, B: 70, fullMark: 100 },
    { subject: 'スキル向上', A: 92, B: 65, fullMark: 100 },
    { subject: 'ワークライフバランス', A: 80, B: 55, fullMark: 100 },
    { subject: 'キャリア展望', A: 85, B: 60, fullMark: 100 }
  ];

  // リアルタイムアラート
  const alerts = [
    { type: 'success', message: '教育委員会: 今月の事務時間削減目標を達成', time: '10分前' },
    { type: 'warning', message: '保健福祉課: 職員研修の参加率が低下傾向', time: '25分前' },
    { type: 'info', message: '智子からの提案: 新しい業務効率化プロセスが利用可能', time: '1時間前' }
  ];

  const COLORS = ['#ef4444', '#f59e0b', '#10b981', '#8b5cf6'];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* ヘッダー */}
        <div className="mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                特殊専門職労務管理・事務負荷軽減ダッシュボード
              </h1>
              <p className="text-gray-600">
                AI人格「智子」による包括的職員サポート - KAGOSHIMA LINK BPaaS
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">リアルタイム更新</p>
              <p className="text-lg font-mono">{currentTime.toLocaleTimeString('ja-JP')}</p>
            </div>
          </div>
        </div>

        {/* フィルターとアラート */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2 bg-white rounded-lg shadow p-4">
            <div className="flex flex-wrap gap-4">
              <select 
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">全部署</option>
                <option value="education">教育委員会</option>
                <option value="welfare">保健福祉課</option>
                <option value="childcare">子育て支援課</option>
              </select>
              <select 
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              >
                <option value="current">今月</option>
                <option value="quarter">四半期</option>
                <option value="year">年間</option>
              </select>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-semibold mb-2 flex items-center">
              <AlertCircle className="w-4 h-4 mr-2 text-blue-500" />
              リアルタイムアラート
            </h3>
            <div className="space-y-1">
              {alerts.slice(0, 2).map((alert, index) => (
                <div key={index} className="text-xs p-2 rounded bg-gray-50">
                  <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                    alert.type === 'success' ? 'bg-green-500' : 
                    alert.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                  }`}></span>
                  {alert.message}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* KPIカード */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">平均事務時間削減</p>
                <p className="text-2xl font-bold text-green-600">29.2%</p>
                <p className="text-xs text-green-500 flex items-center mt-1">
                  <TrendingDown className="w-3 h-3 mr-1" />
                  週平均8.5時間削減
                </p>
              </div>
              <Clock className="w-8 h-8 text-green-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">AI活用職員数</p>
                <p className="text-2xl font-bold text-blue-600">237名</p>
                <p className="text-xs text-blue-500 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  活用率 79.6%
                </p>
              </div>
              <Users className="w-8 h-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">職員満足度</p>
                <p className="text-2xl font-bold text-purple-600">4.2/5.0</p>
                <p className="text-xs text-purple-500 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +0.8pt vs 導入前
                </p>
              </div>
              <Heart className="w-8 h-8 text-purple-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">業務効率向上率</p>
                <p className="text-2xl font-bold text-orange-600">85.3%</p>
                <p className="text-xs text-orange-500 flex items-center mt-1">
                  <Zap className="w-3 h-3 mr-1" />
                  目標値達成
                </p>
              </div>
              <Brain className="w-8 h-8 text-orange-600" />
            </div>
          </div>
        </div>

        {/* メインコンテンツエリア */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* 職種別効率化状況 */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">職種別AI活用・効率化状況</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={staffCategories}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" angle={-45} textAnchor="end" height={80} />
                <YAxis />
                <Tooltip formatter={(value, name) => [
                  name === 'timeReduction' ? `${value}%` : value,
                  name === 'aiAssisted' ? 'AI活用者数' : 
                  name === 'timeReduction' ? '時間削減率' : '総職員数'
                ]} />
                <Bar dataKey="total" fill="#e5e7eb" name="総職員数" />
                <Bar dataKey="aiAssisted" fill="#3b82f6" name="AI活用者数" />
                <Bar dataKey="timeReduction" fill="#10b981" name="時間削減率" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* 業務別効率化実績 */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">業務別効率化実績</h3>
            <div className="space-y-4">
              {efficiencyData.map((task, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{task.task}</span>
                    <span className="text-sm text-green-600 font-bold">
                      -{Math.round(((task.before - task.after) / task.before) * 100)}%
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center">
                      <span className="text-gray-500">改善前:</span>
                      <span className="ml-1 text-red-600">{task.before}分</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500">改善後:</span>
                      <span className="ml-1 text-green-600">{task.after}分</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500">満足度:</span>
                      <span className="ml-1 text-blue-600">{task.satisfaction}</span>
                    </div>
                  </div>
                  <div className="mt-2 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full"
                      style={{ width: `${(task.aiContribution / task.before) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 詳細分析エリア */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* 月次改善トレンド */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">月次改善トレンド</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value, name) => [
                  `${value}${name === 'satisfaction' ? '/5.0' : '%'}`,
                  name === 'workload' ? '業務負荷' :
                  name === 'satisfaction' ? '満足度' :
                  name === 'efficiency' ? '効率性' : 'AI活用率'
                ]} />
                <Line type="monotone" dataKey="workload" stroke="#ef4444" name="業務負荷" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="satisfaction" stroke="#10b981" name="満足度" strokeWidth={2} />
                <Line type="monotone" dataKey="efficiency" stroke="#3b82f6" name="効率性" strokeWidth={2} />
                <Line type="monotone" dataKey="aiAdoption" stroke="#8b5cf6" name="AI活用率" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* AIスキルレベル分布 */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">AIスキルレベル分布</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={skillLevels}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                  label={({ level, count }) => `${level}: ${count}名`}
                >
                  {skillLevels.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {skillLevels.map((skill, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <div 
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: skill.color }}
                    ></div>
                    <span>{skill.level}</span>
                  </div>
                  <span className="font-medium">{skill.count}名</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ウェルビーイング分析とAI提案 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* ウェルビーイングレーダーチャート */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">職員ウェルビーイング分析</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={wellbeingData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar name="AI導入後" dataKey="A" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                <Radar name="導入前" dataKey="B" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
            <div className="flex justify-center space-x-4 mt-2">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
                <span className="text-sm">AI導入後</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded mr-2"></div>
                <span className="text-sm">導入前</span>
              </div>
            </div>
          </div>

          {/* AI智子からの提案 */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-blue-500" />
              AI智子からの改善提案
            </h3>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-900">重要度: 高</h4>
                    <p className="text-sm text-blue-800 mt-1">
                      教員の授業準備時間を更に20%削減可能です。AIによる教材作成支援の活用を推奨します。
                    </p>
                    <p className="text-xs text-blue-600 mt-2">推定効果: 週4時間削減</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-green-900">重要度: 中</h4>
                    <p className="text-sm text-green-800 mt-1">
                      保育士の個別指導計画作成を自動化することで、より多くの時間を子どもとの交流に充てられます。
                    </p>
                    <p className="text-xs text-green-600 mt-2">推定効果: 週2.5時間削減</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-purple-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-purple-900">重要度: 中</h4>
                    <p className="text-sm text-purple-800 mt-1">
                      AIによるスケジュール最適化で、会議時間の重複を防ぎ、効率的な時間管理を実現できます。
                    </p>
                    <p className="text-xs text-purple-600 mt-2">推定効果: 月6時間削減</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* アクションプランと研修情報 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 今月のアクションプラン */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4 text-orange-600">今月のアクションプラン</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div>
                  <p className="font-medium text-sm">AI活用研修実施</p>
                  <p className="text-xs text-gray-600">対象: 新規職員20名</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div>
                  <p className="font-medium text-sm">業務プロセス見直し</p>
                  <p className="text-xs text-gray-600">教育委員会との連携強化</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div>
                  <p className="font-medium text-sm">満足度調査実施</p>
                  <p className="text-xs text-gray-600">四半期レビュー準備</p>
                </div>
              </div>
            </div>
          </div>

          {/* 研修・スキルアップ */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4 text-green-600">研修・スキルアップ</h3>
            <div className="space-y-3">
              <div className="border-l-4 border-green-500 pl-3">
                <p className="font-medium text-sm">AI基礎研修</p>
                <p className="text-xs text-gray-600">完了率: 92% (275名)</p>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                  <div className="bg-green-500 h-1.5 rounded-full" style={{width: '92%'}}></div>
                </div>
              </div>
              <div className="border-l-4 border-blue-500 pl-3">
                <p className="font-medium text-sm">応用活用研修</p>
                <p className="text-xs text-gray-600">完了率: 67% (200名)</p>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{width: '67%'}}></div>
                </div>
              </div>
              <div className="border-l-4 border-purple-500 pl-3">
                <p className="font-medium text-sm">専門職研修</p>
                <p className="text-xs text-gray-600">完了率: 45% (135名)</p>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                  <div className="bg-purple-500 h-1.5 rounded-full" style={{width: '45%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* 成果・認定状況 */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4 text-blue-600">成果・認定状況</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-yellow-600" />
                  <span className="font-medium text-sm">AI活用マスター</span>
                </div>
                <span className="text-sm font-bold text-yellow-600">34名</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="font-medium text-sm">効率化チャンピオン</span>
                </div>
                <span className="text-sm font-bold text-green-600">18名</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Brain className="w-4 h-4 text-blue-600" />
                  <span className="font-medium text-sm">イノベーター</span>
                </div>
                <span className="text-sm font-bold text-blue-600">9名</span>
              </div>
            </div>
          </div>
        </div>

        {/* フッター */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>KAGOSHIMA LINK BPaaS - AI人格「智子」による専門職サポートシステム</p>
          <p>最終更新: {currentTime.toLocaleString('ja-JP')} | データ信頼性: 99.8%</p>
        </div>
      </div>
    </div>
  );
};

export default SpecializedStaffDashboard;