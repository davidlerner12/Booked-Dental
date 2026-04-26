import { ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const RiskFreeTrial = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const isHe = i18n.language === "he";

  if (isHe) {
    return (
      <section className="relative border-t border-border py-24 overflow-hidden bg-card/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(42_100%_55%/0.07),transparent_60%)]" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
              {t("risk_free_trial.badge")}
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl leading-tight">
              {t("risk_free_trial.title_prefix")}
              <span className="text-gradient-gold">{t("risk_free_trial.title_highlight")}</span>
            </h2>
            <p className="mb-8 text-muted-foreground">{t("risk_free_trial.para1")}</p>

            <form action="https://formsubmit.co/David@Booked.Dental" method="POST" className="space-y-6">
              <input type="hidden" name="_next" value={`${window.location.origin}/${lang}/thank-you`} />
              <input type="hidden" name="_subject" value="New Market Check Submission!" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="space-y-2 text-start">
                <Label htmlFor="name">{t("booking.form_name_label")}</Label>
                <Input id="name" name="name" required placeholder={t("booking.form_name_placeholder")} className="bg-card" />
              </div>
              
              <div className="space-y-2 text-start">
                <Label htmlFor="email">{t("booking.form_email_label")}</Label>
                <Input id="email" name="email" type="email" required placeholder={t("booking.form_email_placeholder")} className="bg-card" />
              </div>
              
              <div className="space-y-2 text-start">
                <Label htmlFor="phone">{t("booking.form_phone_label")}</Label>
                <Input id="phone" name="phone" type="tel" required placeholder={t("booking.form_phone_placeholder")} className="bg-card" dir="ltr" />
              </div>
              
              <div className="space-y-2 text-start">
                <Label htmlFor="city">{t("booking.form_city_label")}</Label>
                <Input id="city" name="city" required placeholder={t("booking.form_city_placeholder")} className="bg-card" />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full mt-2">
                {t("booking.form_submit")}
              </Button>
            </form>
          </div>
        </div>
      </section>
    );
  }

  // English version (unchanged)
  return (
    <section className="relative border-t border-border py-24 overflow-hidden bg-card/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(42_100%_55%/0.07),transparent_60%)]" />
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 shadow-gold">
              <ShieldCheck className="h-7 w-7 text-primary" />
            </div>
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm text-primary">
                {t("risk_free_trial.badge")}
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                {t("risk_free_trial.title_prefix")}<span className="text-gradient-gold">{t("risk_free_trial.title_highlight")}</span>
              </h2>
            </div>
          </div>
          <div className="mb-8 rounded-xl border border-primary/20 bg-primary/5 px-8 py-8">
            <p className="mb-4 text-lg text-muted-foreground leading-relaxed">{t("risk_free_trial.para1")}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("risk_free_trial.para2_prefix")}
              <span className="font-semibold text-foreground">{t("risk_free_trial.para2_highlight")}</span>
              {t("risk_free_trial.para2_suffix")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskFreeTrial;
