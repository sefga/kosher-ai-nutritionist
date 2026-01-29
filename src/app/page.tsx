'use client';
import React, { useState } from 'react';
import { 
  CheckCircle, 
  ShieldCheck, 
  Brain, 
  Smartphone, 
  ShoppingCart,
  MessageCircle,
  X,
  Lock,
  Zap,
  ChevronDown,
  Search,
  Database,
  ChefHat
} from 'lucide-react';

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-xl z-50 border-b border-slate-200/60 shadow-sm">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">K</div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
              Kosher AI
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('problem')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">Проблема</button>
            <button onClick={() => scrollTo('features')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">Технология</button>
            <button onClick={() => scrollTo('comparison')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">Сравнение</button>
            <button onClick={() => scrollTo('pricing')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">Тарифы</button>
            <button className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 active:scale-95 transform duration-150">
              Попробовать бесплатно
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Chat Mockup */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white overflow-hidden">
        <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 text-blue-700 text-sm font-semibold border border-blue-100">
              <ShieldCheck className="w-4 h-4" />
              <span>SaaS-платформа нового поколения</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Ваш Личный <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Раввин-Диетолог</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-xl leading-relaxed">
              Персональный AI-агент, который планирует меню, помнит аллергии всей семьи и <strong>гарантирует</strong> соблюдение законов Кашрута через двойную валидацию.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-2xl hover:bg-blue-700 transition shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 active:scale-95 transform duration-150">
                <MessageCircle className="w-5 h-5" />
                Запустить в Telegram
              </button>
              <button onClick={() => scrollTo('features')} className="px-8 py-4 text-lg font-bold text-slate-700 bg-white rounded-2xl hover:bg-slate-50 transition border border-slate-200 flex items-center justify-center gap-3">
                Как это работает?
              </button>
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-500 pt-4">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-600">
                    User
                  </div>
                ))}
              </div>
              <p>Уже 100+ семей в списке ожидания</p>
            </div>
          </div>

          {/* Chat Interface Mockup */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] opacity-20 blur-2xl"></div>
            <div className="relative bg-white border border-slate-200 rounded-[2rem] shadow-2xl p-6 md:p-8 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-4 border-b border-slate-100 pb-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  <ChefHat className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Kosher AI</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-sm text-slate-500">Online • Safety Layer Active</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* User Message */}
                <div className="flex gap-4 flex-row-reverse">
                  <div className="bg-slate-100 text-slate-800 px-5 py-3 rounded-2xl rounded-tr-sm max-w-[85%]">
                    <p className="font-medium text-sm text-slate-500 mb-1">Михаил</p>
                    <p>Хочу приготовить сливочную пасту с курицей на ужин. Дай рецепт.</p>
                  </div>
                </div>

                {/* AI Warning Message */}
                <div className="flex gap-4">
                  <div className="bg-red-50 text-red-900 border border-red-100 px-5 py-4 rounded-2xl rounded-tl-sm max-w-[90%] shadow-sm">
                    <div className="flex items-center gap-2 mb-2 text-red-600 font-bold">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Кашрут Alert</span>
                    </div>
                    <p className="mb-3 text-sm leading-relaxed">
                      Михаил, внимание! Смешивание мяса (курица) и молока (сливки) запрещено законами Кашрута.
                    </p>
                    <p className="text-sm font-medium">Предлагаю альтернативы:</p>
                    <ul className="text-sm list-disc pl-4 mt-1 space-y-1 opacity-90">
                      <li>Использовать <strong>растительные сливки</strong> (Парве).</li>
                      <li>Заменить курицу на <strong>лосось</strong> (Рыба сочетается с молочным).</li>
                    </ul>
                  </div>
                </div>

                {/* AI Correction */}
                 <div className="flex gap-4">
                  <div className="bg-blue-50 text-slate-800 border border-blue-100 px-5 py-3 rounded-2xl rounded-tl-sm max-w-[90%]">
                     <p className="text-sm">Какой вариант выберем?</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Tags */}
            <div className="absolute -right-8 top-20 bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-bounce duration-[3000ms]">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase">Статус</p>
                <p className="font-bold text-sm">Парве</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Почему соблюдать Кашрут так сложно?</h2>
          <p className="text-slate-600 text-lg">Каждый день вы сталкиваетесь с десятками микро-решений, которые создают стресс и когнитивную нагрузку.</p>
        </div>
        
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { icon: Search, title: "Тысячи нюансов", desc: "E-коды добавок, сертификаты раввинатов, статусы продуктов. Держать это в голове невозможно." },
            { icon: Brain, title: "Усталость от решений", desc: "«Что приготовить?» — этот вопрос каждый вечер превращается в муку, учитывая вкусы всех детей." },
            { icon: Zap, title: "Цена ошибки", desc: "Случайно смешали мясное и молочное? Ошибка стоит дорого, как духовно, так и финансово (кошерование кухни)." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition">
              <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Deep Dive Features */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">4 Уровня Интеллекта</h2>
            <p className="text-slate-600 text-lg">Как устроен мозг вашего цифрового ассистента</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="flex gap-6">
              <div className="w-12 h-12 shrink-0 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl">1</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Гипер-Персонализация (RAG)</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  В отличие от обычного ChatGPT, Kosher AI имеет <strong>долгосрочную память</strong>. Он помнит, что ваш сын не ест лук, а у жены аллергия на глютен.
                </p>
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-sm font-mono text-slate-600">
                  {`> User: Что на ужин?`}<br/>
                  {`> AI: (Retrieving Memory...)`}<br/>
                  {`> AI: Вчера была рыба. Сегодня вторник, вы просили легкое меню...`}
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-6">
              <div className="w-12 h-12 shrink-0 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center font-bold text-xl">2</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Safety Layer (Слой Безопасности)</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Каждый ответ проходит через алгоритмический фильтр. Мы проверяем не только вкус, но и <strong>Галаху</strong>.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-green-700 bg-green-50 px-3 py-2 rounded-lg w-fit">
                  <ShieldCheck className="w-4 h-4" />
                  Validated: Meat/Milk Separation
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-6">
              <div className="w-12 h-12 shrink-0 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center font-bold text-xl">3</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Изоляция Данных</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Архитектура Multi-Tenant гарантирует, что данные одной семьи физически отделены от других. Ваша диета — это ваша тайна.
                </p>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Database className="w-4 h-4" />
                  <span>Encrypted Vector DB</span>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-6">
              <div className="w-12 h-12 shrink-0 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center font-bold text-xl">4</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Активный Мониторинг</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  База знаний обновляется автоматически. Если Раввинат отозвал сертификат у печенья, бот узнает об этом мгновенно и предупредит вас.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Сравнение подходов</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-bold mb-6 text-slate-400">Обычный путь</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-400">
                  <X className="w-5 h-5 mt-1 text-red-500" />
                  <span>Гуглить каждый E-код (Е120, Е471...)</span>
                </li>
                <li className="flex items-start gap-3 text-slate-400">
                  <X className="w-5 h-5 mt-1 text-red-500" />
                  <span>Держать в голове, что ели на обед (мясное?)</span>
                </li>
                <li className="flex items-start gap-3 text-slate-400">
                  <X className="w-5 h-5 mt-1 text-red-500" />
                  <span>Искать рецепты и адаптировать их под кошер</span>
                </li>
                <li className="flex items-start gap-3 text-slate-400">
                  <X className="w-5 h-5 mt-1 text-red-500" />
                  <span>Забывать про предпочтения детей</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-600 p-8 rounded-2xl shadow-2xl border border-blue-400 transform md:scale-105">
              <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                С Kosher AI
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-1 text-blue-200" />
                  <span className="font-medium">Мгновенный ответ по фото этикетки</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-1 text-blue-200" />
                  <span className="font-medium">Авто-таймер интервалов (Мясо/Молоко)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-1 text-blue-200" />
                  <span className="font-medium">Готовые меню под ваши вкусы</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-1 text-blue-200" />
                  <span className="font-medium">Проактивные напоминания ("Достань рыбу")</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16">Тарифные планы</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-500 mb-2">Базовый</h3>
              <div className="text-4xl font-bold mb-2">$0 <span className="text-sm font-normal text-slate-400">/ навсегда</span></div>
              <p className="text-slate-500 mb-6 text-sm">Идеально для проверки продуктов в магазине</p>
              <hr className="mb-6 border-slate-100" />
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm"><CheckCircle className="w-4 h-4 text-slate-400" /> Проверка E-кодов</li>
                <li className="flex items-center gap-2 text-sm"><CheckCircle className="w-4 h-4 text-slate-400" /> База знаний Раввината</li>
                <li className="flex items-center gap-2 text-sm"><CheckCircle className="w-4 h-4 text-slate-400" /> Простые вопросы</li>
              </ul>
              <button className="w-full py-3 rounded-xl font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition">
                Начать бесплатно
              </button>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-blue-600 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">РЕКОМЕНДУЕМ</div>
              <h3 className="text-lg font-bold text-blue-600 mb-2">Персональный Нутрициолог</h3>
              <div className="text-4xl font-bold mb-2">$9.99 <span className="text-sm font-normal text-slate-400">/ месяц</span></div>
              <p className="text-slate-500 mb-6 text-sm">Полное ведение питания вашей семьи</p>
              <hr className="mb-6 border-slate-100" />
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle className="w-4 h-4 text-blue-600" /> Все функции Free</li>
                <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle className="w-4 h-4 text-blue-600" /> Персональное меню на неделю</li>
                <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle className="w-4 h-4 text-blue-600" /> Списки покупок</li>
                <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle className="w-4 h-4 text-blue-600" /> Память вкусов и аллергий</li>
                <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle className="w-4 h-4 text-blue-600" /> Приоритетная поддержка</li>
              </ul>
              <button className="w-full py-3 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 transition shadow-lg shadow-blue-600/20">
                Попробовать (7 дней бесплатно)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Частые вопросы</h2>
          <div className="space-y-4">
            {[
              { q: "Откуда вы берете информацию о кошерности?", a: "Мы агрегируем данные из открытых баз ведущих агентств (OU, OK, Star-K) и локальных списков Раввинатов." },
              { q: "Может ли бот ошибиться?", a: "Как и любой AI, риск существует. Однако наш Safety Layer минимизирует его. В критических ситуациях мы всегда рекомендуем проконсультироваться с живым раввином." },
              { q: "Мои данные видны другим?", a: "Нет. Мы используем архитектуру с изолированными ячейками памяти. Ваши предпочтения и вопросы зашифрованы и доступны только вам." }
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between p-4 text-left font-bold hover:bg-slate-50 transition"
                >
                  {item.q}
                  <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="p-4 pt-0 text-slate-600 leading-relaxed bg-slate-50 border-t border-slate-100">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-slate-400 text-sm border-t border-slate-800">
        <div className="container mx-auto px-6 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">K</div>
            <span className="text-lg font-bold text-white">Kosher AI</span>
          </div>
          <p>© 2026 Kosher AI Inc. Все права защищены.</p>
          <p className="max-w-lg mx-auto">
            Сервис является информационным помощником. Информация не является Галахическим постановлением (Псак Алаха).
          </p>
        </div>
      </footer>
    </div>
  );
}
