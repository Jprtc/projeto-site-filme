import { useState } from 'react';
import './PerguntasFrequentes.css';

function PerguntasFrequentes({ idioma }) {
  const [perguntaAtiva, setPerguntaAtiva] = useState(null);

  const conteudosFaq = {
    pt: {
      titulo: 'Perguntas frequentes',
      perguntas: [
        {
          pergunta: 'O que é a Netflix?',
          resposta: 'A Netflix é um serviço de streaming que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet.\n\nVocê pode assistir a quantos filmes e séries quiser, quando e onde quiser – tudo por um preço mensal acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.'
        },
        {
          pergunta: 'Quanto custa a Netflix?',
          resposta: 'Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$ 20,90 a R$ 59,90 por mês.'
        },
        {
          pergunta: 'Onde posso assistir?',
          resposta: 'Assista onde quiser, quando quiser. Acesse sua conta Netflix em netflix.com para assistir no computador ou em qualquer aparelho conectado à internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames.\n\nVocê também pode baixar suas séries favoritas com o aplicativo Netflix para iOS ou Android. Use os downloads para levar a Netflix para onde quiser sem precisar de conexão com a internet. Leve a Netflix com você para qualquer lugar.'
        },
        {
          pergunta: 'Como faço para cancelar?',
          resposta: 'A Netflix é flexível. Você pode cancelar a sua conta online com apenas dois cliques. Não há taxa de cancelamento. Você inicia e encerra sua assinatura quando quiser.'
        },
        {
          pergunta: 'O que eu posso assistir na Netflix?',
          resposta: 'A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser.'
        },
        {
          pergunta: 'A Netflix é adequada para crianças?',
          resposta: 'A experiência infantil da Netflix faz parte da sua assinatura para que as crianças se divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos responsáveis.\n\nO recurso de controle parental, incluso nos perfis para crianças e protegido por PIN, permite restringir a classificação etária do conteúdo que as crianças podem ver e bloquear títulos específicos que você não quer que elas assistam.'
        }
      ]
    },
    en: {
      titulo: 'Frequently Asked Questions',
      perguntas: [
        {
          pergunta: 'What is Netflix?',
          resposta: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.\n\nYou can watch as much as you want, whenever you want without a single commercial – all for one low monthly price.'
        },
        {
          pergunta: 'How much does Netflix cost?',
          resposta: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from R$ 20.90 to R$ 59.90 a month. No extra costs, no contracts.'
        },
        {
          pergunta: 'Where can I watch?',
          resposta: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.'
        },
        {
          pergunta: 'How do I cancel?',
          resposta: 'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
        },
        {
          pergunta: 'What can I watch on Netflix?',
          resposta: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'
        },
        {
          pergunta: 'Is Netflix good for kids?',
          resposta: 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.\n\nKids profiles come with PIN-protected parental controls.'
        }
      ]
    },
    es: {
      titulo: 'Preguntas frecuentes',
      perguntas: [
        { pregunta: '¿Qué es Netflix?', resposta: 'Netflix es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet.\n\nTodo lo que quieras ver, sin límites ni comerciales, a un costo muy accesible.' },
        { pregunta: '¿Cuánto cuesta Netflix?', resposta: 'Disfruta Netflix en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming, todo por una tarifa plana mensual. Planes desde R$ 20,90 hasta R$ 59,90 al mes. Sin costos adicionales ni contratos.' },
        { pregunta: '¿Dónde puedo ver Netflix?', resposta: 'Disfruta donde quieras y cuando quieras. Inicia sesión en tu cuenta de Netflix para ver contenido al instante a través de netflix.com desde tu computadora personal o en cualquier dispositivo conectado a internet que cuente con la app de Netflix.' },
        { pregunta: '¿Cómo cancelo?', resposta: 'Netflix es flexible. Sin contratos molestos ni compromisos. Cancela la membresía online con solo un par de clics. No hay cargos por cancelación.' },
        { pregunta: '¿Qué puedo ver en Netflix?', resposta: 'Netflix tiene un amplio catálogo de películas, documentales, series, anime, originales de Netflix premiados y más. Todo lo que quieras ver, cuando quieras.' },
        { pregunta: '¿Es Netflix para niños?', resposta: 'La experiencia de Netflix para niños está incluida en la membresía para que los padres tengan el control mientras los peques disfrutan series y películas familiares en su propio espacio.' }
      ]
    },
    fr: {
      titulo: 'Foire aux questions',
      perguntas: [
        { pregunta: 'Qu\'est-ce que Netflix ?', resposta: 'Netflix est un service de streaming qui propose une vaste sélection de séries TV, films, animes, documentaires et autres documentaires primés sur des milliers d\'appareils connectés à Internet.' },
        { pregunta: 'Combien coûte Netflix ?', resposta: 'Regardez Netflix sur votre smartphone, tablette, Smart TV, ordinateur ou appareil de streaming, le tout pour un tarif mensuel fixe. Les forfaits vont de 20,90 R$ à 59,90 R$ par mois. Pas de contrat ni de frais supplémentaires.' },
        { pregunta: 'Où puis-je regarder Netflix ?', resposta: 'Regardez Netflix n\'importe où, n\'importe quand. Connectez-vous à votre compte pour regarder Netflix en ligne sur netflix.com depuis votre ordinateur ou tout appareil connecté à Internet avec l\'application Netflix.' },
        { pregunta: 'Comment puis-je annuler mon forfait ?', resposta: 'Netflix est flexible. Pas de contrat ni d\'engagement. Vous pouvez facilement annuler votre compte en ligne en deux clics. Aucun frais d\'annulation.' },
        { pregunta: 'Que puis-je regarder sur Netflix ?', resposta: 'Netflix propose un vaste catalogue comprenant notamment des longs métrages, des documentaires, des séries TV, des animes et des programmes originaux Netflix primés.' },
        { pregunta: 'Netflix est-il adapté aux enfants ?', resposta: 'La section Netflix Jeunesse est incluse dans votre abonnement et offre un contrôle parental pour que les enfants puissent profiter de séries et de films familiaux dans un espace dédié.' }
      ]
    },
    de: {
      titulo: 'Häufig gestellte Fragen',
      perguntas: [
        { pregunta: 'Was ist Netflix?', resposta: 'Netflix ist ein Streaming-Dienst, der eine große Vielfalt an preisgekrönten Serien, Filmen, Anime, Dokumentationen und mehr auf Tausenden von internetfähigen Geräten bietet.' },
        { pregunta: 'Wie viel kostet Netflix?', resposta: 'Schauen Sie Netflix auf Ihrem Smartphone, Tablet, Smart-TV, Laptop oder Streaming-Gerät – alles für einen festen monatlichen Betrag. Die Abos kosten zwischen 20,90 R$ und 59,90 R$ pro Monat. Keine zusätzlichen Kosten oder Verträge.' },
        { pregunta: 'Wo kann ich Netflix schauen?', resposta: 'Schauen Sie überall und jederzeit. Loggen Sie sich in Ihr Netflix-Konto ein, um sofort auf netflix.com über Ihren Computer oder auf jedem internetfähigen Gerät, das die Netflix-App bietet, zu schauen.' },
        { pregunta: 'Wie kann ich kündigen?', resposta: 'Netflix ist flexibel. Es gibt keine lästigen Verträge und keine Verpflichtungen. Sie können Ihr Konto ganz einfach online mit zwei Klicks kündigen. Es gibt keine Kündigungsgebühren.' },
        { pregunta: 'Was kann ich bei Netflix schauen?', resposta: 'Netflix hat eine umfangreiche Bibliothek an Spielfilmen, Dokumentationen, Serien, Anime, preisgekrönten Netflix Originalen und mehr.' },
        { pregunta: 'Ist Netflix für Kinder geeignet?', resposta: 'Das Netflix-Kids-Erlebnis ist in Ihrem Abo inbegriffen, um Eltern die Kontrolle zu geben, während Kinder familienfreundliche Serien und Filme in ihrem eigenen Bereich genießen können.' }
      ]
    },
    it: {
      titulo: 'Domande frequenti',
      perguntas: [
        { pregunta: 'Cos\'è Netflix?', resposta: 'Netflix è un servizio di streaming che offre una varietà di serie TV, film, documentari pluripremiati e tanto altro su una vasta gamma di dispositivi connessi a Internet.' },
        { pregunta: 'Quanto costa Netflix?', resposta: 'Guarda Netflix su smartphone, tablet, Smart TV, laptop o dispositivi per lo streaming, il tutto per una quota mensile fissa. Piani da 20,90 R$ a 59,90 R$ al mese. Nessun costo aggiuntivo, nessun contratto.' },
        { pregunta: 'Dove posso guardare Netflix?', resposta: 'Guarda ovunque, in qualsiasi momento. Accedi al tuo account per guardare subito Netflix dal tuo computer su netflix.com oppure da qualsiasi dispositivo connessi a Internet compatibile con l\'app Netflix.' },
        { pregunta: 'Come posso disdire?', resposta: 'Netflix è flessibile. Nessun contratto fastidioso e nessun impegno. Puoi facilmente disdire il tuo contratto online con due clic. Nessuna penale per la disdetta.' },
        { pregunta: 'Cosa posso guardare su Netflix?', resposta: 'Netflix ha un nutrito catalogo di lungometraggi, documentari, serie TV, anime, originali Netflix pluripremiati e tanto altro. Guarda tutto quello che vuoi, in qualsiasi momento.' },
        { pregunta: 'Netflix è adatto ai bambini?', resposta: 'L\'area Netflix Kids, già inclusa nell\'abbonamento, offre ai genitori un maggiore controllo sui contenuti e ai più piccoli uno spazio dedicato con serie TV e film per tutta la famiglia.' }
      ]
    },
    ja: {
      titulo: 'よくある質問',
      perguntas: [
        { pregunta: 'Netflixとは何ですか？', resposta: 'Netflixは、受賞歴のあるドラマ、映画、アニメ、ドキュメンタリーなどをインターネット接続デバイスで視聴できるストリーミングサービスです。' },
        { pregunta: 'Netflixの料金はいくらですか？', resposta: 'スマートフォン、タブレット、スマートテレビ、パソコン、ストリーミングデバイスなどでNetflixをご視聴いただけます。月額プランは20.90レアルから59.90レアルです。追加料金や契約はありません。' },
        { pregunta: 'どこで視聴できますか？', resposta: 'いつでも、どこでもご視聴いただけます。パソコンからnetflix.comにログインするか、スマートテレビ、スマートフォン、タブレット、ストリーミングメディアプレーヤー、ゲーム機など、Netflixアプリを利用できるインターネット接続デバイスでログインしてください。' },
        { pregunta: 'キャンセルするにはどうすればよいですか？', resposta: 'Netflixは柔軟性に優れています。面倒な契約や縛りはありません。オンラインで数回クリックするだけで簡単にキャンセルできます。キャンセル料は一切ありません。' },
        { pregunta: 'Netflixでは何が観られますか？', resposta: 'Netflixには、長編映画、ドキュメンタリー、ドラマ、アニメ、受賞歴のあるNetflixオリジナル作品など、充実したラインナップが揃っています。いつでも好きなだけご視聴いただけます。' },
        { pregunta: 'Netflixは子供向けですか？', resposta: 'Netflixメンバーシップには、お子様向けのアカウントが含まれています。保護者の皆様は、お子様がご家族向けのドラマや映画を専用のプロファイルでお楽しみいただけるよう、視聴制限を設定できます。' }
      ]
    },
    ko: {
      titulo: '자주 묻는 질문',
      perguntas: [
        { pregunta: '넷플릭스란 무엇인가요?', resposta: '넷플릭스는 각종 수상에 빛나는 시리즈, 영화, 애니메이션, 다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의 디바이스에서 시청할 수 있는 스트리밍 서비스입니다.' },
        { pregunta: '넷플릭스 요금은 얼마인가요?', resposta: '스마트폰, 태블릿, 스마트 TV, 노트북, 스트리밍 디바이스 등에서 넷플릭스를 월정액 요금 하나로 즐기세요. 멤버십 요금은 월 20.90헤알부터 59.90헤알까지 다양합니다. 추가 비용이나 약정이 없습니다.' },
        { pregunta: '어디에서 시청할 수 있나요?', resposta: '언제 어디서나 시청할 수 있습니다. 넷플릭스 계정으로 로그인하면 PC에서 netflix.com을 통해 바로 시청할 수 있으며, 스마트 TV, 스마트폰, 태블릿, 스트리밍 미디어 플레이어, 게임 콘솔 등 넷플릭스 앱을 지원하는 인터넷 연결 디바이스에서도 시청할 수 있습니다.' },
        { pregunta: '멤버십을 해지하려면 어떻게 해야 하나요?', resposta: '넷플릭스는 부담 없이 이용할 수 있습니다. 성가신 계약도, 약정도 없으니까요. 온라인에서 클릭 두 번이면 쉽게 계정을 해지할 수 있습니다. 해지 수수료도 없으니 원할 때 언제든 계정을 시작하거나 종료하세요.' },
        { pregunta: '넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?', resposta: '넷플릭스는 장편 영화, 다큐멘터리, 시리즈, 애니메이션, 각종 수상에 빛나는 넷플릭스 오리지널 등 방대한 콘텐츠 라이브러리를 보유하고 있습니다. 원하는 시간에 원하는 만큼 시청하세요.' },
        { pregunta: '아이들이 넷플릭스를 봐도 괜찮을까요?', resposta: '넷플릭스 키즈 환경은 멤버십에 포함되어 있으며, 자녀가 자기만의 공간에서 가족용 시리즈와 영화를 즐기는 동안 부모님이 이를 통제할 수 있도록 합니다.' }
      ]
    }
  };

  const dadosAtuais = conteudosFaq[idioma] || conteudosFaq['pt'];

  const togglePergunta = (index) => {
    if (perguntaAtiva === index) {
      setPerguntaAtiva(null);
    } else {
      setPerguntaAtiva(index);
    }
  };

  return (
    <div className="faq-container">
      <h2 className="faq-titulo">{dadosAtuais.titulo}</h2>
      
      <div className="faq-lista">
        {dadosAtuais.perguntas.map((item, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-pergunta-btn"
              onClick={() => togglePergunta(index)}
            >
              <span>{item.pergunta || item.pregunta}</span>
              <span className="faq-icone">
                {perguntaAtiva === index ? '×' : '+'}
              </span>
            </button>
            
            <div className={`faq-resposta ${perguntaAtiva === index ? 'ativa' : ''}`}>
              <p>{item.resposta || item.respuesta}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PerguntasFrequentes;