const FEEDS = {
  domestic: [
    // 사용자가 지정한 종합 언론사
    { source: '동아일보', url: 'https://rss.donga.com/total.xml' },
    { source: '동아일보', url: 'https://rss.donga.com/politics.xml', categoryHint: '정치' },
    { source: '조선일보', url: 'https://www.chosun.com/arc/outboundfeeds/rss/?outputType=xml' },
    { source: '조선일보', url: 'https://www.chosun.com/arc/outboundfeeds/rss/category/politics/?outputType=xml', categoryHint: '정치' },
    { source: '중앙일보', url: 'https://news.google.com/rss/search?q=site%3Ajoongang.co.kr&hl=ko&gl=KR&ceid=KR%3Ako' },

    // 정치·시사 전문
    { source: '시사IN', url: 'https://news.google.com/rss/search?q=site%3Asisain.co.kr&hl=ko&gl=KR&ceid=KR%3Ako', categoryHint: '정치' },

    // IT·AI·전자통신 전문
    { source: 'IT동아', url: 'https://it.donga.com/feeds/rss/', categoryHint: 'AI/전자통신' },
    { source: '바이라인네트워크', url: 'https://byline.network/feed/', categoryHint: 'AI/전자통신' },
    { source: '전자신문', url: 'https://rss.etnews.com/Section901.xml', categoryHint: 'AI/전자통신' },
    { source: 'ZDNet Korea', url: 'https://feeds.feedburner.com/zdkorea', categoryHint: 'AI/전자통신' },
    { source: '블로터', url: 'https://cdn.bloter.net/rss/gns_allArticle.xml', categoryHint: 'AI/전자통신' },
    { source: '보안뉴스', url: 'https://www.boannews.com/media/news_rss.xml', categoryHint: 'AI/전자통신' },

    // 건강·의학 전문
    { source: '의학신문', url: 'https://www.bosa.co.kr/rss/allArticle.xml', categoryHint: '건강정보' },
    { source: '코메디닷컴', url: 'https://kormedi.com/feed/', categoryHint: '건강정보' },

    // 여행·아웃도어 전문
    { source: '트래비', url: 'https://www.travie.com/rss/allArticle.xml', categoryHint: '여행' },

    // 패션·문학 전문: 공개 RSS가 일정하지 않은 매체는 도메인 한정 Google News RSS로 보완
    { source: 'Vogue Korea', url: 'https://news.google.com/rss/search?q=site%3Avogue.co.kr&hl=ko&gl=KR&ceid=KR%3Ako', categoryHint: '패션' },
    { source: '문학 전문매체', url: 'https://news.google.com/rss/search?q=site%3Amunhaknews.com+OR+site%3Anews-paper.co.kr&hl=ko&gl=KR&ceid=KR%3Ako', categoryHint: '문학' }
  ],
  world: [
    // 사용자가 지정한 종합 언론사
    { source: 'The Times', url: 'https://www.thetimes.com/feed/index.xml' },
    { source: 'Politico', url: 'https://news.google.com/rss/search?q=site%3Apolitico.com&hl=en-US&gl=US&ceid=US%3Aen', categoryHint: '정치' },
    { source: 'The New York Times', url: 'https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml' },
    { source: 'The New York Times', url: 'https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml', categoryHint: 'AI/전자통신' },
    { source: 'The New York Times', url: 'https://rss.nytimes.com/services/xml/rss/nyt/Travel.xml', categoryHint: '여행' },
    { source: 'The New York Times', url: 'https://rss.nytimes.com/services/xml/rss/nyt/Books.xml', categoryHint: '문학' },
    { source: 'The New York Times', url: 'https://rss.nytimes.com/services/xml/rss/nyt/Health.xml', categoryHint: '건강정보' },
    { source: 'BBC', url: 'https://feeds.bbci.co.uk/news/rss.xml' },
    { source: 'BBC', url: 'https://feeds.bbci.co.uk/news/technology/rss.xml', categoryHint: 'AI/전자통신' },
    { source: 'BBC', url: 'https://feeds.bbci.co.uk/news/politics/rss.xml', categoryHint: '정치' },
    { source: 'BBC', url: 'https://feeds.bbci.co.uk/news/health/rss.xml', categoryHint: '건강정보' },
    { source: 'BBC', url: 'https://www.bbc.com/travel/feed.rss', categoryHint: '여행' },
    { source: 'BBC', url: 'https://www.bbc.com/culture/feed.rss', categoryHint: '인문학' },
    { source: 'Washington Post', url: 'https://www.washingtonpost.com/arcio/rss/category/politics/', categoryHint: '정치' },
    { source: 'Washington Post', url: 'https://www.washingtonpost.com/arcio/rss/category/opinions/', categoryHint: '오피니언' },
    { source: 'Washington Post', url: 'https://www.washingtonpost.com/arcio/rss/category/technology/', categoryHint: 'AI/전자통신' },
    { source: 'Washington Post', url: 'https://www.washingtonpost.com/arcio/rss/category/world/' },
    { source: 'Washington Post', url: 'https://www.washingtonpost.com/arcio/rss/category/lifestyle/', categoryHint: '라이프스타일' },
    { source: 'The Guardian', url: 'https://www.theguardian.com/world/rss' },
    { source: 'The Guardian', url: 'https://www.theguardian.com/politics/rss', categoryHint: '정치' },
    { source: 'The Guardian', url: 'https://www.theguardian.com/commentisfree/rss', categoryHint: '오피니언' },
    { source: 'The Guardian', url: 'https://www.theguardian.com/technology/rss', categoryHint: 'AI/전자통신' },
    { source: 'The Guardian', url: 'https://www.theguardian.com/travel/rss', categoryHint: '여행' },
    { source: 'The Guardian', url: 'https://www.theguardian.com/books/rss', categoryHint: '문학' },
    { source: 'The Guardian', url: 'https://www.theguardian.com/fashion/rss', categoryHint: '패션' },
    { source: 'The Guardian', url: 'https://www.theguardian.com/lifeandstyle/rss', categoryHint: '라이프스타일' },

    // 전문 매체: AI·전자통신
    { source: 'WIRED', url: 'https://www.wired.com/feed/tag/ai/latest/rss', categoryHint: '인공지능' },
    { source: 'TechCrunch', url: 'https://techcrunch.com/category/artificial-intelligence/feed/', categoryHint: '인공지능' },
    { source: 'The Verge', url: 'https://www.theverge.com/rss/ai-artificial-intelligence/index.xml', categoryHint: '인공지능' },

    // 전문 매체: 여행·패션·문학
    { source: 'Lonely Planet', url: 'https://news.google.com/rss/search?q=site%3Alonelyplanet.com&hl=en-US&gl=US&ceid=US%3Aen', categoryHint: '여행' },
    { source: 'Vogue', url: 'https://www.vogue.com/feed/rss', categoryHint: '패션' },
    { source: 'Literary Hub', url: 'https://lithub.com/feed/', categoryHint: '문학' },
    { source: 'The New Yorker', url: 'https://www.newyorker.com/feed/books/page-turner', categoryHint: '문학' }
  ]
};

const ARTICLE_HOSTS = [
  'news.google.com', 'joongang.co.kr', 'joins.com', 'donga.com', 'chosun.com',
  'thetimes.com', 'nytimes.com', 'bbc.co.uk', 'bbc.com', 'washingtonpost.com', 'theguardian.com',
  'sisain.co.kr', 'politico.com', 'it.donga.com', 'byline.network', 'etnews.com', 'feedburner.com', 'zdnet.co.kr',
  'bloter.net', 'boannews.com', 'bosa.co.kr', 'kormedi.com', 'travie.com', 'vogue.co.kr',
  'munhaknews.com', 'news-paper.co.kr', 'wired.com', 'techcrunch.com', 'theverge.com',
  'lonelyplanet.com', 'vogue.com', 'lithub.com', 'newyorker.com'
];
const hostAllowed = (host) => ARTICLE_HOSTS.some(domain => host === domain || host.endsWith(`.${domain}`));
const CACHE_TTL_MS = 5 * 60 * 1000;
const cache = new Map();
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }
  });
}
function decodeEntities(value = '') {
  return String(value)
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([\da-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&nbsp;/gi, ' ').replace(/&amp;/gi, '&').replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>').replace(/&quot;/gi, '"').replace(/&apos;/gi, "'");
}
function plainTextFromHtml(value = '') {
  return decodeEntities(value)
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(?:p|div|section|article|h[1-6]|li|blockquote)>/gi, '\n\n')
    .replace(/<li\b[^>]*>/gi, '• ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n[ \t]+/g, '\n')
    .replace(/[ \t]{2,}/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}
function innerTag(xml, tag) {
  const escaped = tag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = xml.match(new RegExp(`<${escaped}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${escaped}>`, 'i'));
  return match ? match[1] : '';
}
function textFromTag(xml, tag) {
  return plainTextFromHtml(innerTag(xml, tag));
}
function getAtomLink(entry) {
  const links = [...entry.matchAll(/<link\b([^>]*)\/?\s*>/gi)];
  for (const m of links) {
    const attrs = m[1] || '';
    const rel = (attrs.match(/\brel=["']([^"']+)["']/i) || [])[1] || 'alternate';
    const href = (attrs.match(/\bhref=["']([^"']+)["']/i) || [])[1];
    if (href && (rel === 'alternate' || rel === '')) return href;
  }
  return '';
}
function feedHint(feedUrl) {
  const value = String(feedUrl).toLowerCase();
  if (/opinions|commentisfree/.test(value)) return '오피니언';
  if (/politics|elections/.test(value)) return '정치';
  if (/technology|artificial-intelligence|\/ai\//.test(value)) return 'AI/전자통신';
  if (/travel|lonelyplanet/.test(value)) return '여행';
  if (/books|page-turner|lithub/.test(value)) return '문학';
  if (/health|well-being|bosa|kormedi/.test(value)) return '건강정보';
  if (/fashion|vogue|\/style/.test(value)) return '패션';
  if (/lifestyle|lifeandstyle/.test(value)) return '라이프스타일';
  if (/culture/.test(value)) return '인문학';
  return '';
}
function parseFeed(xml, feed) {
  const entries = [...xml.matchAll(/<(item|entry)\b[^>]*>([\s\S]*?)<\/\1>/gi)]
    .map(m => ({ kind: m[1].toLowerCase(), body: m[2] }));
  return entries.map(({ kind, body }) => {
    const title = textFromTag(body, 'title');
    let articleUrl = textFromTag(body, 'link');
    if (kind === 'entry' || !articleUrl) articleUrl = getAtomLink(body) || articleUrl;
    const summaryRaw = innerTag(body, 'description') || innerTag(body, 'summary') || innerTag(body, 'content:encoded') || innerTag(body, 'content');
    const summary = plainTextFromHtml(summaryRaw);
    const publishedAt = textFromTag(body, 'pubDate') || textFromTag(body, 'published') || textFromTag(body, 'updated') || textFromTag(body, 'dc:date');
    const author = textFromTag(body, 'author') || textFromTag(body, 'dc:creator');
    return {
      title,
      url: decodeEntities(articleUrl).trim(),
      summary,
      publishedAt,
      author,
      source: feed.source,
      feedUrl: feed.url,
      categoryHint: feed.categoryHint || feedHint(feed.url)
    };
  }).filter(article => article.title && article.url && /^https?:\/\//i.test(article.url));
}
async function getFeed(feed) {
  const cacheKey = `feed:${feed.url}`;
  const cached = cache.get(cacheKey);
  if (cached && Date.now() - cached.time < CACHE_TTL_MS) return cached.data;
  const response = await fetch(feed.url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; PersonalNewsClipper/1.1)',
      'Accept': 'application/rss+xml, application/atom+xml, application/xml, text/xml, */*'
    },
    redirect: 'follow',
    signal: AbortSignal.timeout(10000)
  });
  if (!response.ok) throw new Error(`${feed.source} ${response.status}`);
  const xml = await response.text();
  if (!/<(?:rss|feed|rdf:RDF)\b/i.test(xml)) throw new Error(`${feed.source} 피드 형식 오류`);
  const data = parseFeed(xml, feed);
  cache.set(cacheKey, { time: Date.now(), data });
  return data;
}
async function handleNews(url) {
  const region = url.searchParams.get('region') === 'world' ? 'world' : 'domestic';
  if (url.searchParams.get('refresh') === '1') {
    for (const feed of FEEDS[region]) cache.delete(`feed:${feed.url}`);
  }
  const results = await Promise.all(FEEDS[region].map(feed =>
    getFeed(feed).then(data => ({ ok: true, data })).catch(error => ({ ok: false, error: `${feed.source}: ${error.message}` }))
  ));
  const articles = results.flatMap(result => result.ok ? result.data : []);
  const errors = results.filter(result => !result.ok).map(result => result.error);
  const unique = new Map();
  for (const article of articles) {
    const key = article.url.replace(/[?#].*$/, '').replace(/\/$/, '');
    if (!unique.has(key)) unique.set(key, article);
  }
  const sorted = [...unique.values()].sort((a, b) => (Date.parse(b.publishedAt) || 0) - (Date.parse(a.publishedAt) || 0));
  return json({
    region,
    articles: sorted.slice(0, 500),
    errors,
    fetchedAt: new Date().toISOString(),
    successfulFeeds: results.filter(result => result.ok).length,
    totalFeeds: FEEDS[region].length
  });
}
function getMeta(html, key, attr = 'property') {
  const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`<meta\\b(?=[^>]*\\b${attr}=["']${escaped}["'])[^>]*\\bcontent=["']([^"']*)["'][^>]*>`, 'i');
  return plainTextFromHtml((html.match(pattern) || [])[1] || '');
}
async function handleArticle(url) {
  const target = url.searchParams.get('url');
  if (!target) return json({ error: 'url parameter is required' }, 400);
  let parsed;
  try { parsed = new URL(target); } catch { return json({ error: 'invalid url' }, 400); }
  if (!['http:', 'https:'].includes(parsed.protocol)) return json({ error: 'unsupported protocol' }, 400);
  if (!hostAllowed(parsed.hostname)) return json({ error: 'unsupported news domain' }, 400);
  try {
    const response = await fetch(parsed.toString(), {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; PersonalNewsClipper/1.1)',
        'Range': 'bytes=0-180000',
        'Accept': 'text/html,application/xhtml+xml'
      },
      redirect: 'follow',
      signal: AbortSignal.timeout(12000)
    });
    const finalUrl = response.url ? new URL(response.url) : parsed;
    if (!hostAllowed(finalUrl.hostname)) {
      return json({ title: '', description: '', embeddable: false, error: 'redirected to an unsupported domain' });
    }
    const html = (await response.text()).slice(0, 180000);
    const title = getMeta(html, 'og:title') || plainTextFromHtml((html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || '');
    const description = getMeta(html, 'og:description') || getMeta(html, 'description', 'name');
    const xfo = response.headers.get('x-frame-options') || '';
    const csp = response.headers.get('content-security-policy') || '';
    const frameAncestors = (csp.match(/frame-ancestors\s+([^;]+)/i) || [])[1] || '';
    let embeddable = !/deny|sameorigin/i.test(xfo);
    if (frameAncestors) {
      const origin = new URL(url.origin).origin;
      embeddable = embeddable && (
        frameAncestors.includes('*') || frameAncestors.includes(origin) ||
        frameAncestors.includes('https:') || frameAncestors.includes('http:')
      );
    }
    return json({ title, description, embeddable, finalUrl: finalUrl.toString(), status: response.status });
  } catch (error) {
    return json({ title: '', description: '', embeddable: false, error: error.message });
  }
}
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === 'OPTIONS') return new Response(null, { headers: corsHeaders });
    if (url.pathname === '/api/news') return handleNews(url);
    if (url.pathname === '/api/article') return handleArticle(url);
    return env.ASSETS.fetch(request);
  }
};
