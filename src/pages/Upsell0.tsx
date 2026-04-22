import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const STRIPE_LINK = "https://buy.stripe.com/7sYaEZ1xu6to292b3K8IU0e";

const Upsell0 = () => {
  const navigate = useNavigate();
  const [secondsLeft, setSecondsLeft] = useState(660);

  useEffect(() => {
    const t = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(t);
          navigate("/upsell1");
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [navigate]);

  const m = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const s = String(secondsLeft % 60).padStart(2, "0");

  const goRefuse = () => navigate("/upsell1");

  return (
    <div style={{ background: "#0a0a0a", color: "#f2ead8", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
      <style>{`
        .u0-alert { background:#e8110a; color:white; text-align:center; padding:14px 20px; font-family:'Bebas Neue',sans-serif; font-size:clamp(14px,2.5vw,20px); letter-spacing:2px; animation:u0blink 1.5s infinite; }
        @keyframes u0blink { 0%,100%{background:#e8110a;} 50%{background:#b50d08;} }
        .u0-hero { background:radial-gradient(ellipse at 50% 0%,rgba(232,17,10,0.2) 0%,transparent 60%),#0a0a0a; padding:60px 20px; text-align:center; border-bottom:2px solid rgba(255,255,255,0.06); }
        .u0-fomo { display:inline-block; border:2px solid #e8110a; color:#e8110a; font-family:'Bebas Neue',sans-serif; font-size:13px; letter-spacing:4px; padding:8px 24px; margin-bottom:30px; animation:u0border 1.5s infinite; }
        @keyframes u0border { 0%,100%{border-color:#e8110a;color:#e8110a;} 50%{border-color:#ff4444;color:#ff4444;} }
        .u0-hero h1 { font-family:'Bebas Neue',sans-serif; font-size:clamp(42px,8vw,90px); line-height:0.95; color:white; margin-bottom:16px; }
        .u0-hero h1 .gold { color:#f5c518; display:block; }
        .u0-hero h1 .red { color:#e8110a; }
        .u0-hero .lead { font-size:clamp(16px,2.8vw,20px); color:#bbb; max-width:700px; margin:20px auto; line-height:1.7; }
        .u0-hero .lead strong { color:white; }
        .u0-disappear { background:rgba(232,17,10,0.08); border:1px solid rgba(232,17,10,0.25); color:#e87070; font-size:14px; padding:14px 24px; max-width:600px; margin:24px auto 0; line-height:1.6; }
        .u0-section { max-width:860px; margin:0 auto; padding:70px 20px; }
        .u0-tag { font-family:'Bebas Neue',sans-serif; font-size:12px; letter-spacing:5px; color:#e8110a; display:block; margin-bottom:14px; }
        .u0-section h2 { font-family:'Bebas Neue',sans-serif; font-size:clamp(30px,5.5vw,58px); color:white; line-height:1.05; margin-bottom:24px; }
        .u0-section h2 em { color:#f5c518; font-style:normal; }
        .u0-section h2 span { color:#e8110a; }
        .u0-section p { font-size:17px; color:#bbb; line-height:1.75; margin-bottom:18px; }
        .u0-section p strong { color:white; }
        .u0-section p em { color:#f5c518; font-style:normal; }
        .u0-dark { background:#1a1a1a; border-top:1px solid rgba(255,255,255,0.05); border-bottom:1px solid rgba(255,255,255,0.05); padding:70px 20px; }
        .u0-dark .inner { max-width:860px; margin:0 auto; }
        .u0-divider { height:1px; background:linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent); }
        .u0-upgrade { border-left:3px solid #e8110a; background:rgba(232,17,10,0.04); padding:24px 28px; margin:30px 0; font-size:16px; color:#ccc; line-height:1.7; }
        .u0-upgrade strong { color:white; }
        .u0-upgrade em { color:#f5c518; font-style:normal; }
        .u0-proof { border-left:3px solid #f5c518; background:rgba(245,197,24,0.04); padding:24px 28px; margin:30px 0; }
        .u0-proof .pt { font-family:'Bebas Neue',sans-serif; font-size:20px; color:#f5c518; margin-bottom:16px; letter-spacing:2px; }
        .u0-proof ul { list-style:none; padding:0; }
        .u0-proof li { font-size:16px; color:#ccc; padding:6px 0; line-height:1.5; }
        .u0-proof li strong { color:white; }
        .u0-armes { display:grid; grid-template-columns:1fr 1fr; gap:16px; margin:36px 0; }
        @media (max-width:700px){ .u0-armes{grid-template-columns:1fr;} }
        .u0-arme { background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.06); border-left:3px solid #e8110a; padding:22px 20px; }
        .u0-arme .lbl { font-family:'Bebas Neue',sans-serif; font-size:11px; letter-spacing:4px; color:#e8110a; margin-bottom:8px; }
        .u0-arme .ttl { font-size:16px; font-weight:700; color:white; margin-bottom:8px; }
        .u0-arme .desc { font-size:14px; color:#999; line-height:1.6; }
        .u0-bonus { grid-column:1/-1; border-left-color:#f5c518; background:rgba(245,197,24,0.03); }
        .u0-bonus .lbl, .u0-bonus .ttl { color:#f5c518; }
        .u0-value { background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.06); border-left:3px solid #e8110a; padding:28px; margin:30px 0; }
        .u0-value ul { list-style:none; padding:0; }
        .u0-value li { display:flex; justify-content:space-between; font-size:15px; color:#999; padding:10px 0; border-bottom:1px solid rgba(255,255,255,0.04); gap:12px; }
        .u0-value li:last-child { border-bottom:none; }
        .u0-value li .price { color:#e8110a; font-weight:700; }
        .u0-value .total { display:flex; justify-content:space-between; font-size:17px; font-weight:700; color:white; padding-top:14px; margin-top:6px; border-top:1px solid rgba(255,255,255,0.1); gap:12px; }
        .u0-cd { background:rgba(232,17,10,0.06); border-top:1px solid rgba(232,17,10,0.2); border-bottom:1px solid rgba(232,17,10,0.2); text-align:center; padding:50px 20px; }
        .u0-cd .ttl { font-family:'Bebas Neue',sans-serif; font-size:clamp(18px,3.5vw,28px); color:#e8110a; margin-bottom:20px; letter-spacing:1px; }
        .u0-cd .timer { font-family:'Bebas Neue',sans-serif; font-size:clamp(60px,12vw,100px); color:white; letter-spacing:6px; }
        .u0-cd .sub { font-size:14px; color:#999; max-width:600px; margin:20px auto 0; line-height:1.7; }
        .u0-cd .sub strong { color:white; }
        .u0-rare { text-align:center; padding:40px 20px; }
        .u0-rare .text { font-family:'Bebas Neue',sans-serif; font-size:20px; color:#e8110a; margin-bottom:16px; letter-spacing:1px; }
        .u0-pbar { background:#1a1a1a; height:14px; border-radius:7px; max-width:500px; margin:0 auto; overflow:hidden; }
        .u0-pfill { width:89%; height:100%; background:linear-gradient(90deg,#e8110a,#ff4444); border-radius:7px; }
        .u0-cta { text-align:center; padding:70px 20px; max-width:600px; margin:0 auto; }
        .u0-cta .ctxt { font-size:17px; color:#bbb; line-height:1.7; margin-bottom:30px; }
        .u0-cta .ctxt strong { color:white; }
        .u0-cta .ctxt em { color:#f5c518; font-style:normal; }
        .u0-pcross { font-size:20px; color:#555; text-decoration:line-through; margin-bottom:6px; }
        .u0-pmain { font-family:'Bebas Neue',sans-serif; font-size:90px; color:white; line-height:1; letter-spacing:-3px; }
        .u0-pnote { font-size:14px; color:#666; margin:8px 0 20px; }
        .u0-badge { display:inline-block; background:rgba(232,17,10,0.1); border:1px solid rgba(232,17,10,0.3); color:#e8110a; font-size:13px; padding:8px 20px; margin-bottom:24px; letter-spacing:1px; }
        .u0-yes { display:block; background:#e8110a; color:white; font-family:'Bebas Neue',sans-serif; font-size:clamp(18px,3.5vw,24px); letter-spacing:2px; padding:24px 40px; text-decoration:none; border:none; cursor:pointer; width:100%; text-align:center; box-shadow:0 8px 50px rgba(232,17,10,0.5); animation:u0pulse 2s infinite; margin-bottom:16px; }
        @keyframes u0pulse { 0%,100%{box-shadow:0 8px 50px rgba(232,17,10,0.5);} 50%{box-shadow:0 8px 70px rgba(232,17,10,0.8);} }
        .u0-no { display:block; background:#fff; color:#000; font-size:13px; cursor:pointer; border:1px solid #ddd; width:100%; text-align:center; padding:14px; margin-top:16px; font-family:'DM Sans',sans-serif; }
        .u0-no:hover { background:#f5f5f5; }
      `}</style>

      <div className="u0-alert">⚠️ PERSONNALISATION DE TA COMMANDE EN COURS — NE FERME SURTOUT PAS CETTE PAGE ⚠️</div>

      <div className="u0-hero">
        <div className="u0-fomo">🏴‍☠️ TA COMMANDE N'EST PAS TERMINÉE</div>
        <h1>Attends —<span className="gold">Tu vas recevoir</span><span className="red">la Méthode Pirate...</span></h1>
        <p className="lead">Mais les carrousels, c'est le <strong>niveau débutant</strong>. Ça te rapportera <strong>200€/mois</strong> — max.<br />Les vrais pirates encaissent <strong>10 000€/mois</strong> grâce à <strong>UNE seule compétence secrète</strong> que 99% des formateurs ne connaissent même pas.</p>
        <div className="u0-disappear">⚠️ Cette page n'existera plus dès que tu la quittes. Impossible d'y revenir. C'est maintenant ou jamais.</div>
      </div>

      <div className="u0-divider"></div>

      <div className="u0-section">
        <span className="u0-tag">☠ POURQUOI TU VAS RESTER BLOQUÉ</span>
        <h2>Voici pourquoi tu vas rester coincé à 200€/mois comme un amateur</h2>
        <div className="u0-upgrade">
          <strong>Pendant que tu fêtes tes premiers carrousels à 200€...</strong><br /><br />
          D'autres encaissent <em>1 500€ en UN SEUL live</em> avec le même nombre de spectateurs que toi.<br /><br />
          Les carrousels, c'est le <strong>niveau débutant</strong>. Le vrai argent se fait en <strong>TikTok Live</strong>. Les vrais pirates font <em>10 000€/mois</em> avec cette compétence — et personne n'en parle.
        </div>
      </div>

      <div className="u0-divider"></div>

      <div className="u0-dark">
        <div className="inner">
          <span className="u0-tag">⚓ LE MÉCANISME SECRET</span>
          <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(30px,5.5vw,58px)", color: "white", lineHeight: 1.05, marginBottom: 24 }}>Le mécanisme secret que les Pirates utilisent :</h2>
          <p style={{ fontSize: 17, color: "#bbb", lineHeight: 1.75, marginBottom: 18 }}>C'est ce qu'on appelle <strong style={{ color: "white" }}>"La Méthode de Conversion Live"</strong>. Un système psychologique qui <em style={{ color: "#f5c518", fontStyle: "normal" }}>court-circuite le cerveau hésitant</em> de tes spectateurs et les pousse à acheter en direct — sans qu'ils aient le temps de réfléchir.</p>
          <div className="u0-proof">
            <div className="pt">MES RÉSULTATS EN LIVE :</div>
            <ul>
              <li>⚡ <strong>1 live = 1 103€</strong> avec seulement 30 minutes</li>
              <li>👥 <strong>50 spectateurs = 2 000€</strong> encaissés</li>
              <li>📅 <strong>8 lives par mois = 10 000€</strong> minimum</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="u0-divider"></div>

      <div className="u0-section">
        <span className="u0-tag">☠ LES 6 ARMES SECRÈTES</span>
        <h2>Les 6 armes secrètes du <em>Live Pirate</em></h2>
        <div className="u0-armes">
          <div className="u0-arme"><div className="lbl">ARME 01</div><div className="ttl">☠️ Le Piège à Spectateurs Chauds</div><div className="desc">2 carrousels postés 30 min avant le live, 78% arrivent chauds et déjà convaincus.</div></div>
          <div className="u0-arme"><div className="lbl">ARME 02</div><div className="ttl">⚡ La Boucle d'Urgence Infinie</div><div className="desc">Une phrase de 5 mots répétée toutes les 7 minutes déclenche des achats paniques.</div></div>
          <div className="u0-arme"><div className="lbl">ARME 03</div><div className="ttl">🔒 Le Script de Conversion en 7 Minutes</div><div className="desc">Séquence de phrases qui désactive l'esprit critique, testé sur 20+ lives.</div></div>
          <div className="u0-arme"><div className="lbl">ARME 04</div><div className="ttl">🎯 L'Interrogatoire Social Fatal</div><div className="desc">4 questions qui forcent les prospects à avouer leurs échecs, ils achètent pour ne pas perdre la face.</div></div>
          <div className="u0-arme"><div className="lbl">ARME 05</div><div className="ttl">👥 Le Complice Invisible</div><div className="desc">Un commentaire stratégique déclenche une épidémie de "moi aussi je veux" en 3 minutes.</div></div>
          <div className="u0-arme"><div className="lbl">ARME 06</div><div className="ttl">💀 L'Arme Anti-Hater</div><div className="desc">Une phrase de 11 mots transforme chaque hater en vente supplémentaire.</div></div>
          <div className="u0-arme u0-bonus"><div className="lbl">🎁 BONUS</div><div className="ttl">Le Script Live Complet Système Pirate</div><div className="desc">Le script minute par minute des lives à 1 000€+. Tu n'as qu'à lire et encaisser.</div></div>
        </div>
        <a href={STRIPE_LINK} className="u0-yes">🏴‍☠️ OUI — JE VEUX ENCAISSER 1500€ PAR LIVE</a>
      </div>

      <div className="u0-divider"></div>

      <div className="u0-dark">
        <div className="inner">
          <span className="u0-tag">💰 VALEUR RÉELLE</span>
          <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(30px,5.5vw,58px)", color: "white", lineHeight: 1.05, marginBottom: 24 }}>Pour maîtriser ces 6 armes tu devrais normalement payer :</h2>
          <div className="u0-value">
            <ul>
              <li><span>Formation psychologie de la persuasion</span><span className="price">2 500€</span></li>
              <li><span>Coach en closing live</span><span className="price">3 000€</span></li>
              <li><span>18 mois de tests et d'optimisation</span><span className="price">Inestimable</span></li>
            </ul>
            <div className="total"><span>Total</span><span>8 500€ et 2 ans de ta vie</span></div>
          </div>
          <p style={{ textAlign: "center", fontSize: 17, color: "#bbb", marginTop: 30 }}>Mais parce que tu fais partie des rares personnes qui viennent d'acquérir <strong style={{ color: "white" }}>la Méthode Pirate</strong>...</p>
        </div>
      </div>

      <div className="u0-cd">
        <div className="ttl">⚠️ ATTENTION — Cette page se DÉTRUIT automatiquement dans exactement :</div>
        <div className="timer">{m}:{s}</div>
        <p className="sub">Parce que ces armes sont <strong>TROP efficaces</strong>. L'accès est limité à <strong>5 places par mois</strong>. Le prochain accès sera à <strong>467€</strong> à partir du 1er du mois prochain. Tu ne reverras <strong>JAMAIS</strong> cette offre à 97€.</p>
      </div>

      <div className="u0-rare">
        <div className="text">⚠️ Plus que 3 places sur 27</div>
        <div className="u0-pbar"><div className="u0-pfill"></div></div>
        <div style={{ fontSize: 13, color: "#666", marginTop: 10 }}>89% des places prises</div>
      </div>

      <div className="u0-divider"></div>

      <div className="u0-cta">
        <p className="ctxt">Dans 6 mois tu veux être :<br />Celui qui galère encore avec ses carrousels à <strong>200€/mois</strong>...<br />Ou celui qui encaisse <em>1 500€ en un seul live</em> ?</p>
        <div className="u0-pcross">467€</div>
        <div className="u0-pmain">97€</div>
        <div className="u0-pnote">Uniquement sur cette page · Jamais reproposé à ce prix</div>
        <div className="u0-badge">100% de réussite · 3 places restantes · Accès immédiat</div>
        <a href={STRIPE_LINK} className="u0-yes">🏴‍☠️ OUI — JE VEUX ENCAISSER 1500€ PAR LIVE</a>
        <div style={{ fontSize: 12, color: "#333", marginTop: 10 }}>🔒 Paiement sécurisé via Stripe · Accès immédiat</div>
        <button className="u0-no" onClick={goRefuse}>Non, Merci je préfère rester galérer à 200€/mois et laisser les vrais pirates encaisser 1500€ par live tiktok</button>
      </div>
    </div>
  );
};

export default Upsell0;
