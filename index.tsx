import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Rocket, 
  LayoutDashboard, 
  CreditCard, 
  BookOpen, 
  Building2, 
  Share2, 
  Plug2, 
  MessageSquare, 
  Users, 
  BarChart3, 
  Megaphone, 
  Headphones, 
  HelpCircle,
  Bell,
  ChevronDown,
  RefreshCw,
  Search,
  Globe,
  Facebook,
  Target,
  CircleDot,
  Plus,
  Filter,
  MoreVertical,
  Calendar,
  Dog,
  Cat,
  Activity,
  CheckCircle2,
  Info,
  Instagram,
  Settings,
  AlertCircle,
  ExternalLink,
  Volume2,
  Tag,
  Briefcase,
  Phone,
  Upload,
  DollarSign,
  ChevronRight,
  ChevronLeft,
  TrendingUp,
  TrendingDown,
  MousePointer2,
  Eye,
  Wallet,
  Clock,
  MessageCircle,
  Chrome,
  Pencil,
  Loader2,
  QrCode,
  Link2,
  ShieldCheck,
  Smartphone,
  ArrowUpRight,
  ArrowDownRight,
  Monitor,
  Tablet,
  Layers
} from 'lucide-react';

// Types
type MenuId = 'home' | 'agenda' | 'meu-plano' | 'orcamento' | 'conexoes' | 'crm' | 'analytics' | 'campanhas';

interface MenuItem {
  id: MenuId;
  label: string;
  icon: React.ReactNode;
  hasBadge?: boolean;
}

interface ChatItem {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  unreadCount?: number;
  isAgendado?: boolean;
  avatarColor: string;
  initial: string;
}

interface Lead {
  id: string;
  companyName: string;
  contactName: string;
  status: 'new' | 'contact' | 'meeting' | 'proposal' | 'won' | 'lost';
  tags: string[];
  createdAt: string;
  value?: string;
}

interface Campaign {
  id: string;
  name: string;
  platform: 'Google' | 'Meta' | 'Instagram';
  status: 'Ativa' | 'Pausada' | 'Finalizada';
  spend: string;
  leads: number;
  cpl: string;
  impressions: string;
  clicks: string;
  ctr: string;
  convRate: string;
  cpc: string;
  saude: 'Atenção' | 'Saudavel' | 'Critica';
  orcamento: string;
}

// Home Sub-components
const HomeContent = () => {
  return (
    <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-[#f9fafb] custom-scrollbar">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">Score de Saúde da Conta</h1>
          <p className="text-gray-500 text-sm font-medium">Convose e méhore questa sabere como alta dos átais</p>
        </div>
        
        <div className="flex items-center bg-white border border-gray-100 p-1 rounded-2xl shadow-sm">
          <button className="px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider bg-[#a4c639] text-white shadow-md">
            30D
          </button>
          <button className="px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider text-gray-400 hover:text-gray-600">
            30D
          </button>
          <button className="px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider text-gray-400 hover:text-gray-600 flex items-center gap-1">
            ESTE ANO <ChevronDown size={12} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Card 1: Score de Saúde da Conta */}
        <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-gray-100"
                    strokeWidth="3"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-orange-400"
                    strokeWidth="3"
                    strokeDasharray="76, 100"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-xl font-black text-gray-900 leading-none">76</span>
                  <span className="text-[8px] font-bold text-gray-400">4 / 100</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-black text-gray-900">Score de Saúde da Conta</h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5,6].map(i => (
                      <div key={i} className={`w-1.5 h-1.5 rounded-full ${i <= 4 ? 'bg-orange-400' : 'bg-gray-200'}`}></div>
                    ))}
                  </div>
                  <span className="text-sm font-bold text-gray-700">Atenção</span>
                  <span className="bg-orange-100 text-orange-600 text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-widest flex items-center gap-1">
                    <AlertCircle size={10} /> Tencon
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-xl flex items-center gap-1 text-[10px] font-black text-gray-600 uppercase tracking-widest cursor-pointer">
              30D <ChevronDown size={12} />
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-50">
              <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-red-500 shrink-0">
                <AlertCircle size={14} />
              </div>
              <span className="text-sm font-bold text-gray-800">CPL acima da média histórica</span>
            </div>
            <div className="flex items-center gap-3 pb-4 border-b border-gray-50">
              <div className="w-6 h-6 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-500 shrink-0">
                <AlertCircle size={14} />
              </div>
              <span className="text-sm font-bold text-gray-800">12 leads sem contato &gt; 24h</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-green-500 shrink-0">
                <CheckCircle2 size={14} />
              </div>
              <span className="text-sm font-bold text-gray-800">Conversões estáveis nos últimos 7 dias</span>
            </div>
          </div>
        </div>

        {/* Card 2: Performance com Contexto */}
        <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col">
          <h3 className="text-lg font-black text-gray-900 mb-6">Performance com Contexto</h3>
          
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <p className="text-sm font-bold text-gray-600 mb-1">CPL Atual</p>
              <div className="flex items-end justify-between">
                <p className="text-3xl font-black text-gray-900">R$ 24,10</p>
                <div className="text-right">
                  <p className="text-[10px] font-black text-[#a4c639] uppercase tracking-widest mb-1">Média 1 4:3.9</p>
                </div>
              </div>
            </div>

            <div className="h-24 w-full relative mt-4 mb-6">
               <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="perfGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#a4c639" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#a4c639" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M 0 35 Q 25 35 50 30 T 80 15 T 100 10 L 100 40 L 0 40 Z" fill="url(#perfGradient)" />
                  <path d="M 0 35 Q 25 35 50 30 T 80 15 T 100 10" fill="none" stroke="#a4c639" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="80" y1="15" x2="80" y2="40" stroke="#a4c639" strokeWidth="0.5" strokeDasharray="2,2" />
                  <circle cx="80" cy="15" r="2" fill="white" stroke="#a4c639" strokeWidth="1" />
                  <circle cx="100" cy="10" r="2" fill="#a4c639" />
               </svg>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-50">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Média 30 dias</p>
                <p className="text-lg font-black text-gray-900 flex items-center gap-2">
                  Meats 174
                </p>
              </div>
              <div className="text-right space-y-1">
                <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest flex items-center justify-end gap-1">
                  <span className="text-gray-900">82%</span> Atingido <AlertCircle size={10} className="text-yellow-500" />
                </p>
                <div className="flex items-center gap-2 justify-end">
                  <span className="bg-green-50 text-green-600 text-[10px] font-black px-2 py-1 rounded-lg flex items-center gap-1">
                    <CheckCircle2 size={10} /> R$ 8.33
                  </span>
                  <span className="text-sm font-black text-gray-900">+26%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Meta & Projeção */}
        <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-6">
          <h3 className="text-lg font-black text-gray-900">Meta & Projeção</h3>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm font-bold text-gray-600">
              <span>Meta do mês:</span>
              <span>Retos 40 <span className="text-gray-900 font-black ml-1">174</span></span>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-3xl font-black text-gray-900">300 <span className="text-lg text-gray-500 font-bold">leads</span></span>
              <span className="text-sm font-black text-gray-600">58%</span>
            </div>
            
            <div className="h-12 w-full relative mt-2 bg-gray-50 rounded-lg overflow-hidden">
               <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                 <path d="M 0 100 L 0 80 Q 25 70 40 40 T 60 40 T 100 45 L 100 100 Z" fill="#a4c639" opacity="0.2" />
                 <path d="M 0 100 L 0 80 Q 25 70 40 40 T 58 40 L 58 100 Z" fill="#a4c639" opacity="0.5" />
                 <path d="M 0 80 Q 25 70 40 40 T 60 40 T 100 45" fill="none" stroke="#a4c639" strokeWidth="2" />
               </svg>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-50">
            <div className="space-y-1">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Leads atuais:</p>
              <p className="text-2xl font-black text-gray-900">174</p>
            </div>
            <div className="space-y-1 text-right">
              <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest flex items-center justify-end gap-1">
                Projeção no ritmo: <span className="text-gray-900">82%</span> Atingido <AlertCircle size={10} className="text-yellow-500" />
              </p>
              <div className="flex items-end justify-end gap-2">
                <p className="text-2xl font-black text-gray-900">248</p>
                <p className="text-sm font-black text-gray-600 mb-1">58%</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-6 border-t border-gray-50">
            <div className="space-y-3">
              <div className="flex justify-between text-[10px] font-black text-gray-500 uppercase tracking-widest">
                <span>Or cemcões (7 dias)</span>
                <span className="text-gray-900">R$ 3.800</span>
              </div>
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#a4c639] w-[90%] rounded-full"></div>
              </div>
              <div className="flex justify-between text-[10px] font-black text-gray-500 uppercase tracking-widest">
                <span>Pragao:</span>
                <span className="text-gray-900">R$ 4.190</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-[10px] font-black text-gray-500 uppercase tracking-widest">
                <span>Orçamento Gasto</span>
                <span className="text-gray-900">R$ 4.190</span>
              </div>
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-400 w-[100%] rounded-full"></div>
              </div>
              <div className="flex justify-between text-[10px] font-black text-gray-500 uppercase tracking-widest">
                <span>Pacing:</span>
                <span className="text-yellow-500 flex items-center gap-1">+ 10% <AlertCircle size={10} /></span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: Onde Agir Hoje */}
        <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-6">
          <h3 className="text-lg font-black text-gray-900">Onde Agir Hoje</h3>
          
          <div className="space-y-3">
            <div className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm flex items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="text-red-500 shrink-0 mt-0.5" size={16} />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Campanha "Check-up Geral Search"</h4>
                  <p className="text-xs text-gray-500 mt-1">CPL 3x acima da média histórica</p>
                </div>
              </div>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors shrink-0">
                VERIFICAR
              </button>
            </div>

            <div className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm flex items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="text-red-500 shrink-0 mt-0.5" size={16} />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Campanha "Vacinação Outubro"</h4>
                  <p className="text-xs text-gray-500 mt-1">R$ 380 gastos sem conversão</p>
                </div>
              </div>
              <button className="bg-gray-50 hover:bg-gray-100 text-gray-600 border border-gray-200 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors shrink-0 flex items-center gap-1">
                <Pencil size={12} /> FRICAR
              </button>
            </div>

            <div className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-yellow-100 flex items-center justify-center shrink-0">
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              </div>
              <h4 className="text-sm font-bold text-gray-900">12 leads aguardando contato &gt; 24h</h4>
            </div>

            <div className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-yellow-100 flex items-center justify-center shrink-0">
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              </div>
              <h4 className="text-sm font-bold text-gray-900">Frequência Meta acima de 3.5</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Analytics Sub-components
const AnalyticsStatCard = ({ label, value, change, isPositive, icon: Icon, trendData }: { 
  label: string, 
  value: string, 
  change: string, 
  isPositive: boolean, 
  icon: any,
  trendData: number[]
}) => (
  <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm space-y-4 hover:shadow-md transition-shadow group">
    <div className="flex items-center justify-between">
      <div className={`p-3 rounded-2xl ${isPositive ? 'bg-[#a4c63910] text-[#a4c639]' : 'bg-red-50 text-red-500'}`}>
        <Icon size={20} />
      </div>
      <div className={`flex items-center gap-1 text-[10px] font-black uppercase tracking-wider ${isPositive ? 'text-[#a4c639]' : 'text-red-500'}`}>
        {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
        {change}
      </div>
    </div>
    <div className="space-y-1">
      <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{label}</h3>
      <p className="text-2xl font-black text-gray-900">{value}</p>
    </div>
    <div className="h-10 w-full flex items-end gap-1 opacity-50 group-hover:opacity-100 transition-opacity">
      {trendData.map((h, i) => (
        <div key={i} className={`flex-1 rounded-t-[2px] ${isPositive ? 'bg-[#a4c639]' : 'bg-red-400'}`} style={{ height: `${h}%` }}></div>
      ))}
    </div>
  </div>
);

const FunnelStep = ({ label, value, percentage, color }: { label: string, value: string, percentage: string, color: string }) => (
  <div className="flex items-center gap-4 group">
    <div className="w-24 text-right shrink-0">
      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{label}</span>
      <p className="text-sm font-bold text-gray-800">{value}</p>
    </div>
    <div className="flex-1 h-12 relative bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
      <div 
        className={`h-full ${color} opacity-80 group-hover:opacity-100 transition-all duration-500 rounded-r-lg shadow-inner`} 
        style={{ width: percentage }}
      >
        <div className="absolute inset-0 flex items-center justify-end pr-4 pointer-events-none">
          <span className="text-[10px] font-black text-white drop-shadow-sm">{percentage}</span>
        </div>
      </div>
    </div>
  </div>
);

const AnalyticsContent = () => {
  const [period, setPeriod] = useState('Últimos 30 dias');
  const [comparing, setComparing] = useState(true);

  return (
    <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-[#f9fafb] custom-scrollbar">
      {/* Header com Controles Aprimorados */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">Performance Analytics</h1>
          <p className="text-gray-500 text-sm font-medium">Análise aprofundada de resultados e comparativos de tráfego</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="bg-white border border-gray-100 p-1 rounded-2xl flex items-center gap-1 shadow-sm">
            {['7D', '30D', '90D', 'Este Ano'].map((t) => (
              <button 
                key={t}
                onClick={() => setPeriod(t === '30D' ? 'Últimos 30 dias' : t)}
                className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${
                  (t === '30D' && period === 'Últimos 30 dias') || (t === period) 
                  ? 'bg-[#a4c639] text-white shadow-md' 
                  : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <button 
            onClick={() => setComparing(!comparing)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs transition-all border ${
              comparing 
              ? 'bg-[#a4c63910] border-[#a4c63920] text-[#a4c639]' 
              : 'bg-white border-gray-100 text-gray-400'
            }`}
          >
            <RefreshCw size={14} className={comparing ? 'animate-spin-slow' : ''} />
            Comparar c/ Período Anterior
          </button>

          <button className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-lg hover:bg-black transition-all active:scale-95">
            <Calendar size={14} /> Customizar Período
          </button>
        </div>
      </div>

      {/* KPI Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnalyticsStatCard 
          label="Sessões Totais" 
          value="48.291" 
          change="+12.4%" 
          isPositive={true} 
          icon={Globe}
          trendData={[30, 45, 40, 60, 55, 75, 80, 70, 90, 85]}
        />
        <AnalyticsStatCard 
          label="Conversões" 
          value="1.402" 
          change="+8.1%" 
          isPositive={true} 
          icon={Target}
          trendData={[20, 30, 25, 40, 35, 50, 45, 60, 55, 65]}
        />
        <AnalyticsStatCard 
          label="Taxa de Rejeição" 
          value="34.2%" 
          change="-2.5%" 
          isPositive={false} 
          icon={Activity}
          trendData={[80, 70, 75, 60, 65, 50, 55, 40, 45, 35]}
        />
        <AnalyticsStatCard 
          label="ROI Estimado" 
          value="4.8x" 
          change="+0.6" 
          isPositive={true} 
          icon={TrendingUp}
          trendData={[40, 42, 45, 48, 50, 55, 58, 62, 65, 70]}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart Card - Aprimorado para evitar transbordamento */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-6 flex flex-col">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-lg font-black text-gray-900 tracking-tight">Evolução de Tráfego Orgânico vs Pago</h3>
              <p className="text-xs text-gray-400 font-medium">Análise comparativa de volume por canal de aquisição</p>
            </div>
            <div className="flex items-center gap-4 bg-gray-50 px-4 py-2 rounded-2xl border border-gray-100 shadow-inner">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#a4c639] shadow-sm"></div>
                <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Atual</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-300 shadow-sm"></div>
                <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Anterior</span>
              </div>
            </div>
          </div>

          <div className="flex-1 min-h-[300px] w-full relative pt-4 pb-2 px-8">
            {/* Grid Y-Axis Labels - Corrigido para não invadir o gráfico */}
            <div className="absolute left-0 top-4 bottom-8 flex flex-col justify-between items-end pr-2 pointer-events-none">
              {[100, 80, 60, 40, 20, 0].map((val) => (
                <span key={val} className="text-[9px] font-bold text-gray-300 uppercase leading-none">{val}%</span>
              ))}
            </div>

            {/* Grid Horizontal Lines */}
            <div className="absolute left-10 right-0 top-4 bottom-8 flex flex-col justify-between pointer-events-none">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="w-full border-t border-gray-50"></div>
              ))}
            </div>

            {/* SVG Chart Area */}
            <div className="absolute left-10 right-0 top-4 bottom-8 overflow-hidden">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 200" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="organicGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#a4c639" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#a4c639" stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                {/* Previous Period Area (Faded) */}
                <path 
                  d="M 0 180 Q 150 190 300 160 T 600 170 T 1000 150 L 1000 200 L 0 200 Z" 
                  fill="#f9fafb" 
                />
                <path 
                  d="M 0 180 Q 150 190 300 160 T 600 170 T 1000 150" 
                  fill="none" 
                  stroke="#e5e7eb" 
                  strokeWidth="2" 
                  strokeDasharray="6,6"
                  vectorEffect="non-scaling-stroke"
                />

                {/* Current Period Area (Gradient) */}
                <path 
                  d="M 0 140 Q 150 100 300 120 T 600 90 T 1000 50 L 1000 200 L 0 200 Z" 
                  fill="url(#organicGradient)" 
                />
                {/* Current Period Line (Thick) */}
                <path 
                  d="M 0 140 Q 150 100 300 120 T 600 90 T 1000 50" 
                  fill="none" 
                  stroke="#a4c639" 
                  strokeWidth="4" 
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  className="drop-shadow-md"
                />

                {/* Active Points */}
                <circle cx="1000" cy="50" r="6" fill="#a4c639" stroke="white" strokeWidth="3" className="shadow-lg" />
              </svg>
            </div>

            {/* X-Axis Labels - Corrigido para alinhar com o SVG */}
            <div className="absolute left-10 right-0 bottom-0 flex items-center justify-between pt-2 pointer-events-none">
              {['1 Out', '7 Out', '14 Out', '21 Out', '28 Out', '31 Out'].map((date) => (
                <span key={date} className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{date}</span>
              ))}
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-50 flex items-center gap-4">
             <div className="flex items-center gap-2 text-[#a4c639] bg-[#a4c63910] px-3 py-1.5 rounded-xl font-black text-[10px] uppercase tracking-wider">
               <TrendingUp size={14} /> Desempenho excelente este mês
             </div>
             <p className="text-[10px] text-gray-400 font-medium">Os dados são atualizados a cada 4 horas sincronizando com GA4.</p>
          </div>
        </div>

        {/* Channels/Device Breakdown */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-8">
          <div className="space-y-1">
            <h3 className="text-lg font-black text-gray-900 tracking-tight">Origem de Aquisição</h3>
            <p className="text-xs text-gray-400 font-medium">Divisão por canal de tráfego</p>
          </div>

          <div className="space-y-6">
            {[
              { label: 'Google Ads', value: '42%', color: 'bg-[#a4c639]', icon: <Chrome size={14} /> },
              { label: 'Meta Ads', value: '28%', color: 'bg-blue-500', icon: <Facebook size={14} /> },
              { label: 'Busca Orgânica', value: '15%', color: 'bg-orange-400', icon: <Search size={14} /> },
              { label: 'Acesso Direto', value: '10%', color: 'bg-purple-500', icon: <Link2 size={14} /> },
              { label: 'Outros', value: '5%', color: 'bg-gray-300', icon: <MoreVertical size={14} /> },
            ].map((channel, idx) => (
              <div key={idx} className="space-y-2 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`p-1.5 rounded-lg ${channel.color.replace('bg-', 'bg-').concat('10')} text-${channel.color.split('-')[1]}-600 group-hover:scale-110 transition-transform`}>
                      {channel.icon}
                    </div>
                    <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">{channel.label}</span>
                  </div>
                  <span className="text-xs font-black text-gray-900">{channel.value}</span>
                </div>
                <div className="w-full h-2 bg-gray-50 rounded-full overflow-hidden border border-gray-100 shadow-inner">
                  <div className={`h-full ${channel.color} rounded-full transition-all duration-1000 delay-${idx*100}`} style={{ width: channel.value }}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-gray-50 space-y-4">
            <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Tráfego por Dispositivo</h4>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: 'Mobile', val: '68%', icon: <Smartphone size={16} /> },
                { label: 'Desktop', val: '28%', icon: <Monitor size={16} /> },
                { label: 'Tablet', val: '4%', icon: <Tablet size={16} /> },
              ].map((d, i) => (
                <div key={i} className="bg-gray-50 p-3 rounded-2xl border border-gray-100 text-center space-y-1 hover:bg-white hover:shadow-md transition-all cursor-default">
                  <div className="text-gray-400 mx-auto w-fit">{d.icon}</div>
                  <p className="text-xs font-black text-gray-900">{d.val}</p>
                  <p className="text-[8px] font-bold text-gray-400 uppercase tracking-tighter">{d.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Conversion Funnel Section */}
      <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-lg font-black text-gray-900 tracking-tight">Funil de Conversão Integrado</h3>
            <p className="text-xs text-gray-400 font-medium">Desde a primeira interação até a conversão final do lead</p>
          </div>
          <button className="w-fit flex items-center gap-2 text-[#a4c639] font-black text-[10px] uppercase tracking-widest hover:bg-[#a4c63910] px-4 py-2 rounded-xl transition-colors">
            Ver Relatório Detalhado <ChevronRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-4">
            <FunnelStep label="Visualizações" value="124.502" percentage="100%" color="bg-[#a4c639]" />
            <FunnelStep label="Interações" value="18.291" percentage="14.6%" color="bg-[#a4c639dd]" />
            <FunnelStep label="Leads Gerados" value="2.402" percentage="1.9%" color="bg-[#a4c639bb]" />
            <FunnelStep label="Vendas/Clientes" value="512" percentage="0.4%" color="bg-[#a4c63999]" />
          </div>

          <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 flex flex-col md:flex-row items-center gap-8 shadow-inner">
            <div className="w-28 h-28 rounded-full border-4 border-[#a4c639] flex flex-col items-center justify-center text-[#a4c639] bg-white shadow-xl rotate-3">
              <span className="text-2xl font-black">0.4%</span>
              <span className="text-[8px] font-bold uppercase tracking-tighter">Taxa Final</span>
            </div>
            <div className="space-y-3 text-center md:text-left">
              <h4 className="font-black text-gray-900 tracking-tight text-sm uppercase">Taxa de Conversão Final</h4>
              <p className="text-xs text-gray-500 font-medium leading-relaxed max-w-sm">
                Sua taxa de conversão aumentou <span className="text-[#a4c639] font-black">12%</span> em relação ao período anterior. 
                Otimizações em <span className="font-black">Google Ads</span> geraram um incremento de ROI direto nas campanhas de busca.
              </p>
              <div className="pt-2">
                <button className="bg-white border border-gray-200 px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-sm hover:shadow-md transition-shadow">
                  Ver Insights de IA
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OrcamentoContent = () => {
  const [verbaAprovada, setVerbaAprovada] = useState(5000);
  const [gastoReal, setGastoReal] = useState(4190);

  // Pacing Calculations
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  
  const dataInicio = new Date(year, month, 1);
  const dataFim = new Date(year, month + 1, 0);
  
  const diasTotais = dataFim.getDate();
  const diasPassados = Math.min(today.getDate(), diasTotais);
  const diasRestantes = diasTotais - diasPassados;
  
  const saldo = verbaAprovada - gastoReal;
  const percentualUsado = verbaAprovada > 0 ? (gastoReal / verbaAprovada) * 100 : 0;
  
  const gastoIdeal = (verbaAprovada / diasTotais) * diasPassados;
  const diferenca = gastoReal - gastoIdeal;
  const percentualDiferenca = gastoIdeal > 0 ? (diferenca / gastoIdeal) * 100 : 0;
  
  const rDia = diasRestantes > 0 ? saldo / diasRestantes : 0;
  
  const absPercentualDiferenca = Math.abs(percentualDiferenca);
  let pacingStatus = 'no ritmo';
  let pacingColor = 'text-green-500';
  let pacingBg = 'bg-green-50';
  
  if (absPercentualDiferenca > 20) {
    pacingStatus = 'crítico';
    pacingColor = 'text-red-500';
    pacingBg = 'bg-red-50';
  } else if (absPercentualDiferenca > 10) {
    pacingStatus = 'atenção';
    pacingColor = 'text-yellow-500';
    pacingBg = 'bg-yellow-50';
  }

  const formatCurrency = (val: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);

  return (
    <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-[#f9fafb] custom-scrollbar">
      {/* Módulo Inteligente de Pacing */}
      <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl font-black text-gray-900 tracking-tight">Pacing</h2>
          <p className="text-gray-500 text-sm font-medium">Controle mensal de verba, gastos e ritmo de investimento</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Orçamento do Mês */}
          <div className="bg-gray-50 p-6 rounded-[2rem] border border-gray-100 space-y-4">
            <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest">Orçamento do Mês</h3>
            
            <div className="space-y-3">
              <div>
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Verba Aprovada</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-bold">R$</span>
                  <input 
                    type="number" 
                    value={verbaAprovada} 
                    onChange={(e) => setVerbaAprovada(Number(e.target.value))}
                    className="w-full bg-white border border-gray-200 rounded-xl py-2 pl-10 pr-4 text-sm font-black text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#a4c639] transition-all"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Gasto até hoje</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-bold">R$</span>
                  <input 
                    type="number" 
                    value={gastoReal} 
                    onChange={(e) => setGastoReal(Number(e.target.value))}
                    className="w-full bg-white border border-gray-200 rounded-xl py-2 pl-10 pr-4 text-sm font-black text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#a4c639] transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-gray-500">Saldo Restante</span>
                <span className={`text-sm font-black ${saldo < 0 ? 'text-red-500' : 'text-gray-900'}`}>{formatCurrency(saldo)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-gray-500">% Usado</span>
                <span className="text-sm font-black text-gray-900">{percentualUsado.toFixed(1)}%</span>
              </div>
              <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden mt-1">
                <div className={`h-full rounded-full ${percentualUsado > 100 ? 'bg-red-500' : 'bg-[#a4c639]'}`} style={{ width: `${Math.min(percentualUsado, 100)}%` }}></div>
              </div>
            </div>
          </div>

          {/* Card 2: Pacing */}
          <div className="bg-gray-50 p-6 rounded-[2rem] border border-gray-100 space-y-4">
            <div className="flex justify-between items-start">
              <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest">Pacing</h3>
              <span className={`px-2 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest ${pacingBg} ${pacingColor}`}>
                {pacingStatus}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">Dias Passados</span>
                <span className="text-lg font-black text-gray-900">{diasPassados} <span className="text-xs text-gray-400 font-medium">/ {diasTotais}</span></span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">Dias Restantes</span>
                <span className="text-lg font-black text-gray-900">{diasRestantes}</span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-gray-500">Gasto Ideal</span>
                <span className="text-sm font-black text-gray-900">{formatCurrency(gastoIdeal)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-gray-500">Gasto Real</span>
                <span className="text-sm font-black text-gray-900">{formatCurrency(gastoReal)}</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                <span className="text-xs font-bold text-gray-500">Diferença</span>
                <div className="text-right">
                  <span className={`text-sm font-black block ${pacingColor}`}>{diferenca > 0 ? '+' : ''}{formatCurrency(diferenca)}</span>
                  <span className={`text-[10px] font-black ${pacingColor}`}>{percentualDiferenca > 0 ? '+' : ''}{percentualDiferenca.toFixed(1)}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: R$/dia necessário */}
          <div className="flex flex-col gap-4">
            <div className="bg-gray-50 p-6 rounded-[2rem] border border-gray-100 flex-1 flex flex-col justify-center items-center text-center space-y-2">
              <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-widest">R$/dia necessário</h3>
              <p className="text-3xl font-black text-gray-900">{formatCurrency(rDia)}</p>
              <p className="text-xs font-bold text-gray-400">para fechar o mês ({diasRestantes} dias)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CampaignsContent = () => {
  const campaigns: Campaign[] = [
    { id: '1', name: 'Campanha de Vacinação Outubro', platform: 'Meta', status: 'Ativa', spend: 'R$ 1.250,00', leads: 48, cpl: 'R$ 26,04', impressions: '12.450', clicks: '342', ctr: '2.74%', convRate: '9,1%', cpc: 'R$ 2,86', saude: 'Atenção', orcamento: '30%' },
    { id: '2', name: 'Banho e Tosa - Promoção Fidelidade', platform: 'Instagram', status: 'Ativa', spend: 'R$ 840,00', leads: 92, cpl: 'R$ 9,13', impressions: '8.920', clicks: '415', ctr: '4.65%', convRate: '12,4%', cpc: 'R$ 0,73', saude: 'Saudavel', orcamento: '20%' },
    { id: '3', name: 'Check-up Geral Google Search', platform: 'Google', status: 'Pausada', spend: 'R$ 2.100,00', leads: 34, cpl: 'R$ 61,76', impressions: '4.100', clicks: '180', ctr: '4.39%', convRate: '1,9%', cpc: 'R$ 3,05', saude: 'Critica', orcamento: '50%' },
  ];

  return (
    <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-[#f9fafb] custom-scrollbar">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">Gestão de Campanhas</h1>
          <p className="text-gray-500 text-sm font-medium">Monitore e crie campanhas de tráfego pago pra seus clientes</p>
        </div>
        <button className="flex items-center gap-2 bg-[#a4c639] hover:bg-[#92b232] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg transition-all active:scale-95">
          <Plus size={18} /> Nova Campanha
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Card 1: Investimento */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-black text-gray-900">Investimento</span>
              <Wallet className="text-blue-500" size={18} />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-3xl font-black text-gray-900">R$ 4.190</p>
              <ArrowUpRight size={20} className="text-[#a4c639]" />
            </div>
          </div>
          <div className="mt-4 space-y-1">
            <p className="text-xs font-bold text-gray-500"><span className="text-[#a4c639]">+8%</span> vs periodo anterior</p>
            <p className="text-xs font-bold text-gray-500">82% do pacing ideal</p>
          </div>
        </div>

        {/* Card 2: Leads */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-black text-gray-900">Leads</span>
              <TrendingUp className="text-[#a4c639]" size={18} />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-3xl font-black text-gray-900">174</p>
              <ArrowUpRight size={20} className="text-[#a4c639]" />
            </div>
          </div>
          <div className="mt-4 space-y-1">
            <p className="text-xs font-bold text-gray-500"><span className="text-[#a4c639]">+12%</span> nos últimos 7 dias</p>
            <p className="text-xs font-bold text-gray-500">Meta mensal: 300</p>
            <p className="text-xs font-bold text-gray-500">Projeção: 248</p>
          </div>
        </div>

        {/* Card 3: CPL */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-black text-gray-900">CPL</span>
              <TrendingUp className="text-[#a4c639]" size={18} />
            </div>
            <p className="text-3xl font-black text-gray-900">R$ 24,08</p>
          </div>
          <div className="mt-4 space-y-1">
            <p className="text-xs font-bold text-gray-500">Média 30 dias: R$ 19</p>
            <p className="text-xs font-bold text-red-500">+ 26%</p>
          </div>
        </div>

        {/* Card 4: Taxa de Conversão */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-black text-gray-900">Taxa de Conversão</span>
              <TrendingUp className="text-[#a4c639]" size={18} />
            </div>
            <p className="text-3xl font-black text-gray-900">8,1%</p>
            <p className="text-xs font-bold text-[#a4c639] mt-4">+11%</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 40">
              <path d="M0 40 L0 30 Q 25 35 50 20 T 100 10 L 100 40 Z" fill="#a4c639" opacity="0.2" />
              <path d="M0 30 Q 25 35 50 20 T 100 10" fill="none" stroke="#a4c639" strokeWidth="2" opacity="0.5" />
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50">
          <h2 className="text-lg font-black text-gray-900">Gestão de Campanhas</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left whitespace-nowrap">
            <thead>
              <tr className="bg-white text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-50">
                <th className="px-6 py-4">Campanha</th>
                <th className="px-6 py-4">Plataforma</th>
                <th className="px-6 py-4">Investido</th>
                <th className="px-6 py-4">Impressões</th>
                <th className="px-6 py-4">Cliques</th>
                <th className="px-6 py-4">CTR</th>
                <th className="px-6 py-4">Leads</th>
                <th className="px-6 py-4">CPL</th>
                <th className="px-6 py-4">Conv. Rate</th>
                <th className="px-6 py-4">CPC</th>
                <th className="px-6 py-4 text-center">Saúde</th>
                <th className="px-6 py-4">% Orçamento</th>
                <th className="px-6 py-4 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {campaigns.map((c) => (
                <tr key={c.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-bold text-gray-900">{c.name}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                      {c.platform === 'Google' ? <Globe size={14} className="text-blue-500" /> : c.platform === 'Meta' ? <Facebook size={14} className="text-blue-600" /> : <Instagram size={14} className="text-pink-600" />}
                      {c.platform}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{c.spend}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{c.impressions}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{c.clicks}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{c.ctr}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-black">{c.leads}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{c.cpl}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{c.convRate}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{c.cpc}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`text-[10px] font-black uppercase px-3 py-1 rounded-full ${
                      c.saude === 'Saudavel' ? 'bg-green-100 text-green-600' : 
                      c.saude === 'Atenção' ? 'bg-yellow-100 text-yellow-600' : 
                      'bg-red-100 text-red-600'
                    }`}>
                      {c.saude}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{c.orcamento}</td>
                  <td className="px-6 py-4 text-right"><MoreVertical size={18} className="text-gray-300 cursor-pointer ml-auto" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const KanbanCard: React.FC<{ lead: Lead }> = ({ lead }) => (
  <div className="bg-white p-4 rounded-[1.5rem] border border-gray-100 shadow-sm space-y-3 group cursor-grab active:cursor-grabbing hover:border-[#a4c639] transition-all">
    <div className="flex items-center justify-between">
      <h4 className="text-sm font-black text-gray-800 truncate tracking-tight">{lead.companyName}</h4>
      <button className="text-gray-300 group-hover:text-gray-500 transition-colors"><MoreVertical size={14} /></button>
    </div>
    
    <div className="flex flex-wrap gap-1.5">
      {lead.tags.map((tag, idx) => (
        <span key={idx} className="bg-[#a4c63915] text-[#a4c639] text-[9px] font-black px-2 py-0.5 rounded italic uppercase tracking-wider">
          {tag}
        </span>
      ))}
    </div>

    <div className="flex items-center justify-between pt-2 border-t border-gray-50">
      <div className="flex items-center gap-2">
         <button className="w-8 h-8 rounded-lg bg-[#25D366] text-white flex items-center justify-center hover:opacity-80 transition-opacity">
            <MessageCircle size={14} fill="currentColor" />
         </button>
         {lead.value && <span className="text-[11px] font-black text-gray-600 tracking-tighter">{lead.value}</span>}
      </div>
      <div className="text-[9px] text-gray-400 font-bold flex items-center gap-1">
        <Clock size={10} /> {lead.createdAt}
      </div>
    </div>
  </div>
);

const CRMContent = () => {
  const columns = [
    { id: 'new', label: 'Novos Leads', color: 'bg-blue-500', bgColor: 'bg-blue-50' },
    { id: 'contact', label: 'Em Contato', color: 'bg-yellow-500', bgColor: 'bg-yellow-50' },
    { id: 'meeting', label: 'Qualificados', color: 'bg-orange-500', bgColor: 'bg-orange-50' },
    { id: 'proposal', label: 'Proposta', color: 'bg-green-500', bgColor: 'bg-green-50' },
    { id: 'won', label: 'Fechado', color: 'bg-emerald-600', bgColor: 'bg-emerald-50' },
    { id: 'lost', label: 'Perdido', color: 'bg-red-500', bgColor: 'bg-red-50' },
  ];

  const initialLeads: Lead[] = [
    { id: '1', companyName: 'Clínica Pet Feliz', contactName: 'João Silva', status: 'new', tags: ['Marketing', 'Ads'], createdAt: 'Criado há 1 dia' },
    { id: '2', companyName: 'Hospital Vet 24h', contactName: 'Maria Oliveira', status: 'contact', tags: ['Social Media'], createdAt: 'Criado há 3 horas' },
    { id: '3', companyName: 'Pet Shop Alegria', contactName: 'Ricardo Santos', status: 'meeting', tags: ['SEO', 'Full'], createdAt: 'Criado há 2 dias', value: 'R$ 2.500,00' },
    { id: '4', companyName: 'Banho & Tosa VIP', contactName: 'Ana Clara', status: 'proposal', tags: ['Google Ads'], createdAt: 'Criado há 5 dias', value: 'R$ 1.800,00' },
    { id: '5', companyName: 'Gato & Cia', contactName: 'Beto Lima', status: 'new', tags: ['Novo'], createdAt: 'Criado há 4 horas' },
  ];

  const stats = [
    { label: 'Novos Leads', value: '12', color: 'bg-blue-100 text-blue-600' },
    { label: 'Em Contato', value: '08', color: 'bg-yellow-100 text-yellow-600' },
    { label: 'Qualificados', value: '05', color: 'bg-orange-100 text-orange-600' },
    { label: 'Propostas', value: '03', color: 'bg-green-100 text-green-600' },
    { label: 'Fechados', value: '15', color: 'bg-emerald-100 text-emerald-600' },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-[#f9fafb]">
      {/* Header */}
      <div className="px-8 py-6 bg-white border-b border-gray-100 shrink-0">
        <div className="flex items-center justify-between mb-6">
          <div className="space-y-1">
            <h1 className="text-2xl font-black text-gray-900 tracking-tight">CRM - Gestão de Leads</h1>
            <p className="text-gray-500 text-sm font-medium">Controle seu funil de vendas e automatize interações</p>
          </div>
          <button className="flex items-center gap-2 bg-[#a4c639] hover:bg-[#92b232] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg transition-all active:scale-95">
            <Plus size={18} /> Novo Lead
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className={`p-4 rounded-2xl border border-gray-50 shadow-sm flex flex-col gap-1 bg-white hover:border-[#a4c63940] transition-colors`}>
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</span>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-gray-900 tracking-tighter">{stat.value}</span>
                <div className={`w-2 h-2 rounded-full ${stat.color.split(' ')[0]}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Kanban Board */}
      <div className="flex-1 overflow-x-auto p-8 custom-scrollbar">
        <div className="flex gap-6 h-full min-w-max">
          {columns.map((col) => (
            <div key={col.id} className="w-72 flex flex-col gap-4">
              {/* Column Header */}
              <div className={`p-4 rounded-t-2xl ${col.bgColor} border-b-2 border-white flex items-center justify-between shadow-sm`}>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${col.color}`}></div>
                  <span className="text-xs font-black text-gray-800 uppercase tracking-widest">{col.label}</span>
                </div>
                <span className="text-[10px] font-black text-gray-400 bg-white px-2 py-0.5 rounded-full shadow-inner">
                  {initialLeads.filter(l => l.status === col.id).length}
                </span>
              </div>

              {/* Column Body */}
              <div className={`flex-1 ${col.bgColor} rounded-b-2xl p-4 space-y-4 min-h-[400px] border-x border-b border-gray-50 shadow-inner`}>
                {initialLeads.filter(l => l.status === col.id).map((lead) => (
                  <KanbanCard key={lead.id} lead={lead} />
                ))}
                <button className="w-full py-4 border-2 border-dashed border-gray-200 rounded-[1.5rem] text-gray-300 hover:text-[#a4c639] hover:border-[#a4c639] transition-all flex items-center justify-center bg-white/50">
                  <Plus size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Connections Section ---
const ConnectionsContent = () => {
  const [activeTab, setActiveTab] = useState<'Visão Geral' | 'Google' | 'Meta Ads'>('Visão Geral');

  const connections = [
    {
      id: 'google',
      name: 'Google',
      description: 'Analytics (GA4) + Google Ads',
      status: 'Erro',
      details: 'A integração precisa de re-autorização',
      icon: <Chrome className="text-blue-500" size={24} />,
      statusColor: 'bg-red-500',
      statusBg: 'bg-red-100 text-red-700'
    },
    {
      id: 'meta',
      name: 'Meta Ads',
      description: 'Facebook & Instagram - Métricas de anúncios',
      status: 'Erro',
      details: 'Erro de permissão no token de acesso',
      icon: <Share2 className="text-blue-600" size={24} />,
      statusColor: 'bg-red-500',
      statusBg: 'bg-red-100 text-red-700'
    }
  ];

  const renderGoogleContent = () => (
    <div className="space-y-6 max-w-6xl animate-in fade-in duration-500">
      <div className="space-y-1">
        <h2 className="text-xl font-black text-gray-900 tracking-tight">Conexão Google</h2>
        <p className="text-gray-400 text-sm font-medium">Configure as integrações com Google Analytics 4 e Google Ads</p>
      </div>

      <div className="bg-white border border-gray-100 p-5 rounded-[2rem] flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 border border-gray-100 shadow-inner">
             <CheckCircle2 size={14} />
          </div>
          <p className="text-sm font-bold text-gray-700">
            Conta conectada: <span className="font-black">mateus@flyvet.app.br</span>
          </p>
          <button className="text-[10px] font-black text-red-500 hover:text-red-600 uppercase tracking-widest px-4 py-2 hover:bg-red-50 rounded-xl transition-colors">
            Desconectar
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-10 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h3 className="text-lg font-black text-gray-900">Google Analytics 4</h3>
                <p className="text-xs text-gray-400 font-medium">Métricas de tráfego do site</p>
              </div>
              <div className="bg-[#a4c639] text-white px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                <CheckCircle2 size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest">Conectado</span>
              </div>
            </div>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-xl border border-[#a4c63940] flex items-center justify-center text-[#a4c639] shadow-inner bg-[#a4c63910]">
                  <CheckCircle2 size={14} />
                </div>
                <span className="text-sm font-black text-gray-700 tracking-tight">Propriedade configurada</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100 shadow-inner">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Property ID:</span>
                <span className="text-xs font-black text-[#a4c639] tracking-widest">334738859</span>
              </div>
            </div>
          </div>
          <button className="w-fit flex items-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-600 px-6 py-3 rounded-2xl font-black text-[11px] transition-all border border-gray-200 shadow-sm active:scale-95">
            <Pencil size={16} className="text-gray-400" /> Alterar propriedade
          </button>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-10 flex flex-col">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h3 className="text-lg font-black text-gray-900">Google Ads</h3>
              <p className="text-xs text-gray-400 font-medium">Métricas de campanhas de anúncios</p>
            </div>
            <div className="bg-gray-400 text-white px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
              <CircleDot size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">Desconectado</span>
            </div>
          </div>
          <div className="space-y-8 flex-1">
            <div className="space-y-3">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">1. Selecione a MCC (Conta Gerenciadora)</label>
              <div className="relative group">
                <div className="w-full bg-white border-2 border-[#a4c63940] rounded-2xl py-4 px-5 text-sm font-black text-gray-700 flex items-center justify-between cursor-pointer group-hover:border-[#a4c639] transition-all shadow-sm">
                  Fly Digital (957-185-6192)
                  <ChevronDown size={20} className="text-[#a4c639]" />
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">2. Selecione a Conta</label>
              <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 shadow-inner">
                <Loader2 size={20} className="text-[#a4c639] animate-spin" />
                <span className="text-sm font-bold text-gray-400 italic">Carregando contas disponíveis...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMetaAdsContent = () => (
    <div className="space-y-6 max-w-6xl animate-in fade-in duration-500">
      <div className="space-y-1">
        <h2 className="text-xl font-black text-gray-900 tracking-tight">Conexão Meta Ads</h2>
        <p className="text-gray-400 text-sm font-medium">Configure a integração com Facebook & Instagram Ads</p>
      </div>

      <div className="bg-[#a4c63908] border border-[#a4c63920] p-5 rounded-[2rem] flex items-center gap-4 shadow-sm">
        <div className="w-8 h-8 rounded-2xl bg-[#a4c63920] flex items-center justify-center text-[#a4c639] shrink-0 shadow-inner">
          <Info size={18} />
        </div>
        <p className="text-xs text-gray-600 font-medium leading-relaxed uppercase tracking-tighter">
          <span className="font-black text-[#a4c639]">Em Desenvolvimento:</span> A integração com Meta Ads está sendo implementada. Em breve você poderá conectar suas contas de anúncios do Facebook e Instagram por aqui.
        </p>
      </div>

      <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-8">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="text-lg font-black text-gray-900">Meta Business Manager</h3>
            <p className="text-xs text-gray-400 font-medium tracking-tight">Conecte sua conta de anúncios do Facebook/Instagram</p>
          </div>
          <div className="bg-gray-400 text-white px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
            <CircleDot size={14} />
            <span className="text-[10px] font-black uppercase tracking-widest">Desconectado</span>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-sm text-gray-400 font-bold italic tracking-tight">Nenhuma conta Meta Ads configurada até o momento.</p>
          
          <div className="bg-gray-50/50 rounded-[2rem] p-8 space-y-6 border border-gray-50 shadow-inner">
            <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-200 pb-2">Recursos que estarão disponíveis em breve:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Conexão via Access Token de longa duração",
                "Seleção de conta de anúncios (Ad Account)",
                "Métricas de desempenho de campanhas",
                "Alcance, impressões e engajamento real",
                "CPM, CPC e métricas avançadas de custo",
                "Análise detalhada de público-alvo"
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-xs text-gray-500 font-bold uppercase tracking-tighter">
                  <div className="w-2 h-2 bg-[#a4c63960] rounded-full"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex-1 overflow-y-auto bg-[#f9fafb] flex flex-col min-h-0">
      <div className="px-8 py-8 bg-white shrink-0 border-b border-gray-50">
        <h1 className="text-3xl font-black text-gray-900 mb-1 tracking-tight">Conexões</h1>
        <p className="text-gray-500 text-sm font-medium mb-8">Gerencie todas as integrações de APIs externas de forma centralizada</p>

        <div className="flex bg-[#f3f4f6] p-1.5 rounded-[1.5rem] gap-1.5 w-full max-w-5xl shadow-inner">
          {['Visão Geral', 'Google', 'Meta Ads'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`flex-1 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3 ${
                activeTab === tab 
                  ? 'bg-white text-gray-900 shadow-xl' 
                  : 'text-gray-400 hover:text-gray-600 hover:bg-white/50'
              }`}
            >
              {tab === 'Visão Geral' && <LayoutDashboard size={14} />}
              {tab === 'Google' && <Chrome size={14} />}
              {tab === 'Meta Ads' && <Share2 size={14} />}
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="p-8 space-y-8 flex-1 overflow-y-auto custom-scrollbar">
        {activeTab === 'Visão Geral' ? (
          <div className="space-y-8 max-w-6xl">
            <div className="space-y-1">
              <h2 className="text-xl font-black text-gray-900 tracking-tight">Dashboard de Integrações</h2>
              <p className="text-gray-500 text-sm font-medium">Status em tempo real das conexões externas</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {connections.map((conn) => (
                <div key={conn.id} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col gap-6 group hover:border-[#a4c639] hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 bg-gray-50 rounded-[1.5rem] flex items-center justify-center group-hover:bg-[#a4c63910] transition-colors shadow-inner">
                        {conn.icon}
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-black text-gray-900 text-lg tracking-tight">{conn.name}</h3>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{conn.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <div className={`px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm ${conn.statusBg}`}>
                      <div className={`w-2 h-2 rounded-full ${conn.statusColor} shadow-inner`}></div>
                      <span className="text-[9px] font-black uppercase tracking-widest">{conn.status}</span>
                    </div>
                    <button onClick={() => setActiveTab(conn.name as any)} className="text-[#a4c639] font-black text-[10px] uppercase tracking-widest hover:underline">Configurar</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : activeTab === 'Google' ? renderGoogleContent() : activeTab === 'Meta Ads' ? renderMetaAdsContent() : null}
      </div>
    </div>
  );
};

// Sidebar logic
const Sidebar = ({ activeMenu, setActiveMenu }: { activeMenu: MenuId, setActiveMenu: (id: MenuId) => void }) => {
  const menuItems: MenuItem[] = [
    { id: 'home', label: 'Home', icon: <LayoutDashboard size={18} /> },
    { id: 'agenda', label: 'Agenda', icon: <Calendar size={18} /> },
    { id: 'meu-plano', label: 'Planos de Mídia', icon: <CreditCard size={18} /> },
    { id: 'orcamento', label: 'Pacing', icon: <DollarSign size={18} /> },
    { id: 'campanhas', label: 'Campanhas', icon: <Megaphone size={18} /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart3 size={18} /> },
    { id: 'crm', label: 'CRM', icon: <Users size={18} /> },
    { id: 'conexoes', label: 'Conexões', icon: <Plug2 size={18} /> },
  ];
  return (
    <div className="w-64 bg-[#1e232d] text-gray-300 flex flex-col h-screen flex-shrink-0">
      <div className="p-8 flex items-center gap-3">
        <div className="bg-[#a4c639] p-2 rounded-2xl shadow-lg rotate-3"><Rocket className="text-white fill-current" size={24} /></div>
        <span className="text-2xl font-black text-white tracking-tighter">Fly<span className="font-light text-[#a4c639]">Vet</span></span>
      </div>
      <nav className="flex-1 px-4 mt-4 overflow-y-auto space-y-1.5 custom-scrollbar pb-8">
        {menuItems.map((item) => (
          <button key={item.id} onClick={() => setActiveMenu(item.id)} className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all text-xs font-black uppercase tracking-widest group ${activeMenu === item.id ? 'bg-[#a4c639] text-white shadow-xl shadow-[#a4c63920]' : 'hover:bg-white/5 hover:text-white'}`}>
            <div className="flex items-center gap-4">
              <span className={activeMenu === item.id ? 'text-white' : 'text-gray-500 group-hover:text-[#a4c639] transition-colors'}>{item.icon}</span>
              <span>{item.label}</span>
            </div>
            {item.hasBadge && <div className={`w-2 h-2 rounded-full ${activeMenu === item.id ? 'bg-white' : 'bg-red-500'} animate-pulse`}></div>}
          </button>
        ))}
      </nav>
    </div>
  );
};

const WhatsAppContent = ({ onNavigateToConnections }: { onNavigateToConnections: () => void }) => {
  const [activeFilter, setActiveFilter] = useState<'Todas' | 'Leads' | 'Agendados'>('Todas');
  const chats: ChatItem[] = [
    { id: '1', initial: 'I', name: 'Igor Pamplona', lastMessage: 'a configuração do google', time: 'Agora', unreadCount: 7, avatarColor: 'bg-[#a4c639]' },
    { id: '2', initial: 'M', name: 'Matheus', lastMessage: 'Sem mensagens', time: '24min', unreadCount: 5, avatarColor: 'bg-[#a4c639]' },
    { id: '3', initial: 'M', name: 'Matheus', lastMessage: 'Sem mensagens', time: '1h', unreadCount: 1, isAgendado: true, avatarColor: 'bg-[#a4c639]' },
    { id: '4', initial: 'D', name: 'Dr Andre Luiz Blaschikoff', lastMessage: 'Sem mensagens', time: '1h', unreadCount: 1, avatarColor: 'bg-[#a4c639]' },
  ];
  return (
    <div className="flex-1 flex flex-col min-h-0 bg-white">
      <div className="px-8 py-8 border-b border-gray-100 shrink-0">
        <h1 className="text-3xl font-black text-gray-900 tracking-tight">WhatsApp</h1>
        <p className="text-gray-500 text-sm font-medium">Gerenciamento centralizado de conversas e fluxos</p>
      </div>
      <div className="px-8 py-5 shrink-0">
        <div className="bg-red-50 border border-red-100 rounded-[1.5rem] p-5 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-2xl bg-red-100 text-red-500 flex items-center justify-center shadow-inner">
              <AlertCircle size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black text-red-600 uppercase tracking-tighter">WhatsApp Desconectado</span>
              <span className="text-[10px] text-red-400 font-bold uppercase tracking-widest">A conexão com o servidor foi interrompida há 12 min.</span>
            </div>
          </div>
          <button onClick={onNavigateToConnections} className="flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-red-200 transition-all hover:bg-red-700 active:scale-95">
            <ExternalLink size={14} /> Reconfigurar
          </button>
        </div>
      </div>
      <div className="flex-1 flex overflow-hidden">
        <div className="w-[400px] flex flex-col border-r border-gray-100 shrink-0">
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-gray-900 uppercase tracking-widest">Conversas Ativas</span>
              <Volume2 size={16} className="text-[#a4c639]" />
            </div>
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#a4c639] transition-colors" size={18} />
              <input type="text" placeholder="Buscar por nome ou mensagem..." className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-3.5 pl-12 pr-5 text-xs font-medium focus:ring-2 focus:ring-[#a4c63920] outline-none transition-all shadow-inner" />
            </div>
            <div className="flex items-center gap-2">
              {['Todas', 'Leads', 'Agendados'].map((f) => (
                <button key={f} onClick={() => setActiveFilter(f as any)} className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-wider transition-all ${activeFilter === f ? 'bg-gray-900 text-white shadow-xl' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`}>
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar pb-8 px-4">
            {chats.map((chat) => (
              <div key={chat.id} className="mb-2 p-4 flex gap-4 hover:bg-gray-50 rounded-[1.5rem] cursor-pointer border border-transparent hover:border-gray-100 transition-all group">
                <div className={`w-14 h-14 rounded-2xl ${chat.avatarColor} flex items-center justify-center text-white text-xl font-black shrink-0 shadow-lg group-hover:scale-105 transition-transform`}>
                  {chat.initial}
                </div>
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-black text-gray-800 truncate tracking-tight uppercase">{chat.name}</span>
                    <span className="text-gray-400 text-[9px] font-bold uppercase tracking-widest">{chat.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-400 truncate font-medium">{chat.lastMessage}</p>
                    {chat.unreadCount && (
                      <span className="bg-[#a4c639] text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-md ml-2">
                        {chat.unreadCount}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 bg-gray-50 flex items-center justify-center p-10">
           <div className="text-center space-y-6">
              <div className="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center mx-auto text-gray-100 shadow-xl">
                 <MessageSquare size={48} />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-black text-gray-900 tracking-tight">Selecione uma conversa</h3>
                <p className="text-sm text-gray-400 font-medium max-w-xs mx-auto">Visualize o histórico completo e responda seus clientes em tempo real.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const AgendaContent = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([
    { id: 1, title: 'Reunião de Alinhamento - Cliente A', date: new Date(new Date().setHours(10, 0, 0, 0)), type: 'meeting' },
    { id: 2, title: 'Revisão de Campanha - Cliente B', date: new Date(new Date().setHours(14, 30, 0, 0)), type: 'task' },
    { id: 3, title: 'Apresentação de Resultados', date: new Date(new Date().setDate(new Date().getDate() + 2)), type: 'meeting' },
  ]);

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  const today = () => setCurrentDate(new Date());

  const isToday = (day: number) => {
    const d = new Date();
    return d.getDate() === day && d.getMonth() === currentDate.getMonth() && d.getFullYear() === currentDate.getFullYear();
  };

  const getEventsForDay = (day: number) => {
    return events.filter(e => e.date.getDate() === day && e.date.getMonth() === currentDate.getMonth() && e.date.getFullYear() === currentDate.getFullYear());
  };

  return (
    <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-[#f9fafb] custom-scrollbar">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">Agenda</h1>
          <p className="text-gray-500 text-sm font-medium">Gerencie seus compromissos e tarefas (Sincronizado com Google Calendar)</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-4 py-2.5 rounded-xl font-bold text-sm shadow-sm transition-all active:scale-95">
            <RefreshCw size={16} /> Sincronizar Google Calendar
          </button>
          <button className="flex items-center gap-2 bg-[#a4c639] hover:bg-[#92b232] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg transition-all active:scale-95">
            <Plus size={18} /> Novo Evento
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden flex flex-col h-[calc(100vh-12rem)]">
        <div className="p-6 border-b border-gray-50 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-black text-gray-900 w-48">{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
            <div className="flex items-center bg-gray-50 rounded-lg p-1">
              <button onClick={prevMonth} className="p-1.5 hover:bg-white rounded-md text-gray-500 transition-colors"><ChevronLeft size={18} /></button>
              <button onClick={today} className="px-3 py-1.5 hover:bg-white rounded-md text-xs font-bold text-gray-700 transition-colors">Hoje</button>
              <button onClick={nextMonth} className="p-1.5 hover:bg-white rounded-md text-gray-500 transition-colors"><ChevronRight size={18} /></button>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 p-1 rounded-xl">
            <button className="px-4 py-1.5 bg-white shadow-sm rounded-lg text-xs font-bold text-gray-900">Mês</button>
            <button className="px-4 py-1.5 hover:bg-white/50 rounded-lg text-xs font-bold text-gray-500 transition-colors">Semana</button>
            <button className="px-4 py-1.5 hover:bg-white/50 rounded-lg text-xs font-bold text-gray-500 transition-colors">Dia</button>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <div className="grid grid-cols-7 border-b border-gray-50">
            {dayNames.map(day => (
              <div key={day} className="py-3 text-center text-[10px] font-black text-gray-400 uppercase tracking-widest">
                {day}
              </div>
            ))}
          </div>
          <div className="flex-1 grid grid-cols-7 grid-rows-5">
            {Array.from({ length: firstDayOfMonth }).map((_, i) => (
              <div key={`empty-${i}`} className="border-b border-r border-gray-50 bg-gray-50/30 p-2"></div>
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const dayEvents = getEventsForDay(day);
              const isCurrentDay = isToday(day);
              
              return (
                <div key={day} className={`border-b border-r border-gray-50 p-2 min-h-[100px] transition-colors hover:bg-gray-50/50 ${isCurrentDay ? 'bg-blue-50/30' : ''}`}>
                  <div className="flex justify-between items-start mb-1">
                    <span className={`w-7 h-7 flex items-center justify-center rounded-full text-xs font-bold ${isCurrentDay ? 'bg-[#a4c639] text-white shadow-sm' : 'text-gray-700'}`}>
                      {day}
                    </span>
                  </div>
                  <div className="space-y-1 mt-2">
                    {dayEvents.map(event => (
                      <div key={event.id} className={`px-2 py-1 rounded text-[10px] font-bold truncate cursor-pointer transition-transform hover:scale-[1.02] ${
                        event.type === 'meeting' ? 'bg-[#a4c63920] text-[#a4c639]' : 'bg-blue-50 text-blue-600'
                      }`}>
                        {event.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} - {event.title}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
            {Array.from({ length: 42 - (firstDayOfMonth + daysInMonth) }).map((_, i) => (
              <div key={`empty-end-${i}`} className="border-b border-r border-gray-50 bg-gray-50/30 p-2"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [activeMenu, setActiveMenu] = useState<MenuId>('home');

  return (
    <div className="flex h-full bg-gray-50 overflow-hidden">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-10 shrink-0 z-20">
          <div className="flex items-center gap-6">
             <div className="flex flex-col">
               <span className="text-[9px] text-gray-400 font-black uppercase tracking-[0.2em] mb-1">Cliente</span>
               <button className="bg-gray-50 border border-gray-100 px-4 py-2 rounded-xl text-xs font-black text-gray-800 shadow-inner flex items-center gap-3">
                 Vidro Teste <ChevronDown size={14} className="text-[#a4c639]" />
               </button>
             </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 bg-[#a4c63910] px-4 py-2 rounded-full border border-[#a4c63915] shadow-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-[#a4c639] animate-pulse shadow-lg"></div>
              <span className="text-[10px] font-black text-[#a4c639] uppercase tracking-widest">Plano Pro Ativo</span>
            </div>
            <div className="relative">
              <Bell size={22} className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="flex items-center gap-4 pl-8 border-l border-gray-100">
              <div className="flex flex-col items-end">
                <span className="text-sm font-black text-gray-900 tracking-tight">Mateus</span>
                <span className="text-[10px] text-[#a4c639] font-black uppercase tracking-widest">System Admin</span>
              </div>
              <div className="w-11 h-11 rounded-2xl bg-gray-900 flex items-center justify-center text-white font-black shadow-xl rotate-3 hover:rotate-0 transition-transform">M</div>
            </div>
          </div>
        </header>
        <main className="flex-1 flex flex-col overflow-hidden">
          {activeMenu === 'home' ? <HomeContent /> :
           activeMenu === 'agenda' ? <AgendaContent /> :
           activeMenu === 'orcamento' ? <OrcamentoContent /> :
           activeMenu === 'campanhas' ? <CampaignsContent /> :
           activeMenu === 'analytics' ? <AnalyticsContent /> :
           activeMenu === 'crm' ? <CRMContent /> :
           activeMenu === 'conexoes' ? <ConnectionsContent /> :
           <div className="flex-1 flex items-center justify-center bg-gray-50">
             <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto shadow-xl text-gray-200">
                   <Settings size={40} />
                </div>
                <h3 className="text-lg font-black text-gray-800 uppercase tracking-widest">Módulo em Desenvolvimento</h3>
             </div>
           </div>}
        </main>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; } 
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0, 0, 0, 0.05); border-radius: 10px; } 
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(0, 0, 0, 0.1); }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } } 
        .animate-in { animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-spin-slow { animation: spin 3s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);