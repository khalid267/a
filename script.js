document.addEventListener("DOMContentLoaded", () => {
    const duas = [
        " اللهم اني اسئلك الخلق العظيم والحق العظيم والفضل العظيم واجر العظيم والفوز العظيم",
        "‏اللهم ارزقني حلاوة اللسان وسحر البيان والطلاقة في التبيان و احلل عقدة من لساني ‏ياربّ صبّ علي من حنانك مايرضي خاطري ، ومن أمانك مايحفّ قلبي، ومن توفيقك مايجعلني أشعر بأن حظ الدنيا بين يديّ ‏ولا تجعل في رفقتي شقاء، ولا من وجودي عبء، ولا في حديثي أذيّة، ربي اجعلني خفيف العبور باقي الأثر ‏اللهم إننا نسألك النور في أبصارنا والبصيرة في عقولنا، واليقين في قلوبنا والاخلاص في اعمالنا، والنقاء في انفسنا، والسعة في رزقنا، والصحة في ابداننا، ونحمدك يا الله ونشكرك على ما انعمت به علينا، وارزقنا الجنة من غير حساب ولا سابق عذاب ووالدينا",
        "ولا من وجودي عبء، ولا في حديثي أذيّة، ربي اجعلني خفيف العبور باقي الأثر ‏اللهم إننا نسألك النور في أبصارنا والبصيرة في عقولنا",
        "واليقين في قلوبنا والاخلاص في اعمالنا، والنقاء في انفسنا، والسعة في رزقنا، والصحة في ابداننا، ونحمدك يا الله ونشكرك على ما انعمت به علينا، وارزقنا الجنة من غير حساب ولا سابق عذاب ووالدينا🤍 ‏يارب لا تجعلني اظلم احد لا قولا ولا فعلا وجملني باخلاقي وخلقي واحسن ذكري في حضوري وغيابي ‏اللهم ألبسني العافية حتى تهنيني بالمعيشة",
        "واختم لي بالمغفرة حتى لا تضرني الذنوب، واكفني كل هول دون الجنة حتى تبلغنيها",
     ,"اللهم السعة التي تجعل كل شيء هيّن وليّن و سهل  مُطمئن في قلوبنا ‏يا رب السّاعات المستجابات اجبُرْ خاطري جبراً أنت وليّه أسألك يا رب أن تستقيم حياتي وأن لا أضيع في زحام الطريق وأن لا أُخيَّر بين أحبِّ أشيائي ربي أسعدني واشرحْ صدري وأرِحْ قلبي ويسّرْ لي أمري اللهُم إني أستودعك راحتي فاجعلني أسعد خلقك بك ❤️ .‏اللهم إنا نسألك أن​ تحفظ علينا نعمك التي لا تحصى ولا تعد وأن ترزقنا حلو​ ​الحياة، وسعة الرزق، وراحة البال، ولباس​ ​العافية، وحسن الخاتمة، والفردوس الأعلى من الجنة",
        "اللهم ارزقني الفردوس الأعلى بغير حساب",
        "اللهم اجعلنا من الذين يسيرون على صراطك المستقيم",
        "في يوم الجمعة اللهم أغمر قلبي وقلب من احب بالسعادة والعافية وراحة البال والستر والرزق💖 ‏اللهم اجعلني واهلي ومن احببت من أصحاب الحظوظ العظيمه وحبب قلوب خلقك وملائكتك فينا وسخرهم لنا، ربي ارفع قدري وقدرهم وإنصرني وانصرهم وتولنا في من توليت وحقق مطلبنا وبشرنا بما ننتظر منك ياخير المبشرين🌿🤍✨",
        "اللّهـم ارفع شأني وقدري وذكري في الدنيـا والآخرة وأحسِن ذكري بين العالميـن وأغنني عنهـم وسخّـر لي الأرض ومن عليهـا والسماء ومن فيهـا وجمّل حظي وأيامي ولساني واخلاقي واجعلني من احبابـك يا ربّ العالميـن 🤍 ‏اللهُم باعد بيني وبين الأكتئاب وكثرة التَفكير وأجعلُني مواظبًا على صلاتّي وأهدني إليك، ولا ترني فيمن أحب شرًا، وساعدني علي الأستمرار فقد ضاق كُل شيء،",
        "ووفقني وحقق لي ما اتمني، وأغفر لي وسامحني وأجب دعواتي يا الله فأنت مُجيب الدعوات",
        "اللهم يا كافل العباد وواهب الأرزاق وموزع العطايا  ارزقنا نوراً في القلب وضياءً في الوجه وعافيةً في البدن وسعةً في المال والعلم والعمل وحُسن الصفات وصلاح الأعمال والنوايا ، اللهم سترك وعفوك وودك وحُبك وقربك ورضاك ولذة النظر إلى وجهك الكريم ",
        "اللهم في يوم الجمعة أجعل أدعيتنا كالغيّث تروي بها قبر أبي اللهم اجعله من أسعد السُعداء في قبره واجعله في ضمانك وأمانك وإحسانك اللهم بلّل عطش روحه من أنهار جنتك وأروي قبره رحمة ومغفرةً وعفواً من عندك إنك أنت الرحيمُ الكريم و موتانا و موتى المسلمين أجمعين . ‏اللهم في يوم الجمعة مُدَّني بالصبر على الإجابة ولا تجعلني عجولًا ملولًا علِّمني الإلحاح دون كللٍ أو قنوط وبلِّغني ما أطلب أو الرضا إن لم تأذن به🤍 ‏اللهم في يوم الجمعة بلغنا المتسع واليسر في كل امورنا، اللهم سعادة القلب ومغفرة الذنب وقُرة العين وجميل البشائر🤍",
        "يا من دبر ليوسف أمره ، دبر لي أمري وأصلح حالي وأمري كله ، اللهم اقض حاجتي وفك كربتي وآنس وحدتي وفرج همي",
        "اللهم يا مدبر الليلِ والنهار؛ بدل ضيقي لفرج وعجزي لقوة وأحلامي لواقع واخرجني من حولي إلى حولك وقُل لما أتمناه من أمري أن يكون فإنه لا يُعجزك ولا يصعب عليك شيء. ‏اللهم يا ﴿مالك المُلك﴾ يا ﴿مَن بيده المُلك﴾ يا ﴿مَن بيده ملكوت كل شيء﴾ يا ﴿مَن بيدك الخير﴾ يا ﴿مَن يداه مبسوطتان﴾ يا ﴿مَن يُدبِّر الأمر﴾ يا ﴿مَن إليه يُرجَع الأمر كله﴾ يا ﴿مَن يُجيب المضطر﴾ يا﴿مَن يَكشِف السوء﴾ يا﴿مَن يُجير ولا يُجار عليه﴾ ارحمني ارزقني اغفرلي ‏اللهم في يوم الجمعة ‎#ساعة_استجابة أسألك أن لا تحيّرني ولا تخيّرني في أموري ربي دُلني على الطريق الذي يطمئن فيه قلبي ولا تضلني ووجهني وأكتب لي الخيرة فيما أختار يارب كن بقربي في كل خطواتي ‏يّـارب أجعُل ما أسعى‏اللَّهُمَّ إنِّي أَسْأَلُك مِنْ فَضْلِكَ وَرَحْمَتِكَ فَإِنَّهُ لاَ يَمْلِكُهَا إِلاَّ أَنْتْ اللَّهُمَّ اغْفِرْ لِي ذَنْبِي وَوَسِّعْ لِي فِي دَارِي وَبَارِكْ لِي فِي رِزْقِي ‏اللهم اجعلنا أسعد خلقك بك، و أقرب عبادك إليك، اللهم اغفر لنا ما مضى و أصلح لنا ما بقى و أكتب لنا رضاك و عفوك و الجنة ‏اللهم عوِّضني بما يرضيك ويرضيني وتحبه وأحبه أكثر 🤍 ‏اللهم ارزقني حلاوة اللسان وسحر البيان والطلاقة في التبيان و احلل عقدة من لساني ‏ياربّ صبّ علي من حنانك مايرضي خاطري ، ومن أمانك مايحفّ قلبي، ومن توفيقك مايجعلني أشعر بأن حظ الدنيا بين يديّ   ‏ولا تجعل في رفقتي شقاء، ولا من وجودي عبء، ولا في حديثي أذيّة، ربي اجعلني خفيف العبور باقي الأثر  ‏اللهم إننا نسألك النور في أبصارنا والبصيرة في عقولنا، واليقين في قلوبنا والاخلاص في اعمالنا، والنقاء في انفسنا، والسعة في رزقنا، والصحة في ابداننا،  ونحمدك يا الله ونشكرك على ما انعمت به علينا، وارزقنا الجنة من غير حساب ولا سابق عذاب ووالدينا🤍  ‏يارب لا تجعلني اظلم احد لا قولا ولا فعلا وجملني باخلاقي وخلقي واحسن ذكري في حضوري وغيابي   ‏اللهم ألبسني العافية حتى تهنيني بالمعيشة، واختم لي بالمغفرة حتى لا تضرني الذنوب، واكفني كل هول دون الجنة حتى تبلغنيها. ‎  ‏اللهم السعة التي تجعل كل شيء هيّن وليّن و سهل و مُطمئن في قلوبنا ‏يا رب السّاعات المستجابات اجبُرْ خاطري جبراً أنت وليّه أسألك يا رب أن تستقيم حياتي وأن لا أضيع في زحام الطريق وأن لا أُخيَّر بين أحبِّ أشيائي ربي أسعدني واشرحْ صدري وأرِحْ قلبي ويسّرْ لي أمري اللهُم إني أستودعك راحتي فاجعلني أسعد خلقك بكَ ❤️ ",
        "اللهم إنا نسألك أن​ تحفظ علينا نعمك التي لا تحصى ولا تعد وأن ترزقنا حلو​ ​الحياة، وسعة الرزق، وراحة البال، ولباس​ ​العافية، وحسن الخاتمة، والفردوس الأعلى من الجنة🤍",
        "اللهم إنا نسألك أن​ تحفظ علينا نعمك التي لا تحصى ولا تعد وأن ترزقنا حلو​ ​الحياة، وسعة الرزق، وراحة البال، ولباس​ ​العافية، وحسن الخاتمة، والفردوس الأعلى من الجنة🤍",
        "اللهم إنا نسألك أن​ تحفظ علينا نعمك التي لا تحصى ولا تعد وأن ترزقنا حلو​ ​الحياة، وسعة الرزق، وراحة البال، ولباس​ ​العافية، وحسن الخاتمة، والفردوس الأعلى من الجنة🤍",
        "في يوم الجمعة اللهم أغمر قلبي وقلب من احب بالسعادة والعافية وراحة البال والستر والرزق💖 ‏اللهم اجعلني واهلي ومن احببت من أصحاب الحظوظ العظيمه وحبب قلوب خلقك وملائكتك فينا وسخرهم لنا، ربي ارفع قدري وقدرهم وإنصرني وانصرهم وتولنا في من توليت وحقق مطلبنا وبشرنا بما ننتظر منك ياخير المبشرين🌿🤍✨ ‏اللّهـم ارفع شأني وقدري وذكري في الدنيـا والآخرة وأحسِن ذكري بين العالميـن وأغنني عنهـم وسخّـر لي الأرض ومن عليهـا والسماء ومن فيهـا وجمّل حظي وأيامي ولساني واخلاقي واجعلني من احبابـك يا ربّ العالميـن 🤍  ‏اللهم أحيينا مستورين وأمتنا مستورين وابعثنا مستورين وأكرمنا بلقائك مستورين  اللهم استرنا فوق الأرض واسترنا تحت الأرض  واسترنا يوم العرض  اللهم اشف مرضانا ومرضى المسلّمين وارحم موتانا وموتى المسلّمين واقض حوائجنا وحوائج السائلين",
        "اللّهم تولّ أمورنا وفرج همومنا واكشف كروبنا ‏اللهُم باعد بيني وبين الأكتئاب وكثرة التَفكير وأجعلُني مواظبًا على صلاتّي وأهدني إليك، ولا ترني فيمن أحب شرًا، وساعدني علي الأستمرار فقد ضاق كُل شيء، ووفقني وحقق لي ما اتمني، وأغفر لي وسامحني وأجب دعواتي يا الله فأنت مُجيب الدعوات",
        "اللهم اجعلني من الذين يسيرون على هدى وصراط مستقيم",
        "اللهم يا كافل العباد وواهب الأرزاق وموزع العطايا  ارزقنا نوراً في القلب وضياءً في الوجه وعافيةً في البدن وسعةً في المال والعلم والعمل وحُسن الصفات وصلاح الأعمال والنوايا ، اللهم سترك وعفوك وودك وحُبك وقربك ورضاك ولذة النظر إلى وجهك الكريم",
        "‏اللهم في يوم الجمعة أجعل أدعيتنا كالغيّث تروي بها قبر أبي اللهم اجعله من أسعد السُعداء في قبره واجعله في ضمانك وأمانك وإحسانك اللهم بلّل عطش روحه من أنهار جنتك وأروي قبره رحمة ومغفرةً وعفواً من عندك إنك أنت الرحيمُ الكريم و موتانا و موتى المسلمين أجمعين",
        "اللهم في يوم الجمعة مُدَّني بالصبر على الإجابة ولا تجعلني عجولًا ملولًا علِّمني الإلحاح دون كللٍ أو قنوط وبلِّغني ما أطلب أو الرضا إن لم تأذن به🤍 ‏اللهم في يوم الجمعة بلغنا المتسع واليسر في كل امورنا، اللهم سعادة القلب ومغفرة الذنب وقُرة العين وجميل البشائر🤍",
        "يا من دبر ليوسف أمره ، دبر لي أمري وأصلح حالي وأمري كله ، اللهم اقض حاجتي وفك كربتي وآنس وحدتي وفرج همي",
        "اللهم يا مدبر الليلِ والنهار؛ بدل ضيقي لفرج وعجزي لقوة وأحلامي لواقع واخرجني من حولي إلى حولك وقُل لما أتمناه من أمري أن يكون فإنه لا يُعجزك ولا يصعب عليك شيء. ‏اللهم يا ﴿مالك المُلك﴾ يا ﴿مَن بيده المُلك﴾ يا ﴿مَن بيده ملكوت كل شيء﴾ يا ﴿مَن بيدك الخير﴾ يا ﴿مَن يداه مبسوطتان﴾ يا ﴿مَن يُدبِّر الأمر﴾ يا ﴿مَن إليه يُرجَع الأمر كله﴾ يا ﴿مَن يُجيب المضطر﴾ يا﴿مَن يَكشِف السوء﴾ يا﴿مَن يُجير ولا يُجار عليه﴾ ارحمني ارزقني اغفرلي ‏اللهم في يوم الجمعة ",
        "أسألك أن لا تحيّرني ولا تخيّرني في أموري ربي دُلني على الطريق الذي يطمئن فيه قلبي ولا تضلني ووجهني وأكتب لي الخيرة فيما أختار يارب كن بقربي في كل خطواتي ‏يّـارب أجعُل ما أسعى‏اللَّهُمَّ إنِّي أَسْأَلُك مِنْ فَضْلِكَ وَرَحْمَتِكَ فَإِنَّهُ لاَ يَمْلِكُهَا إِلاَّ أَنْتْ اللَّهُمَّ اغْفِرْ لِي ذَنْبِي وَوَسِّعْ لِي فِي دَارِي وَبَارِكْ لِي فِي رِزْقِي ‏اللهم اجعلنا أسعد خلقك بك، و أقرب عبادك إليك",
        "اللهم اغفر لنا ما مضى و أصلح لنا ما بقى و أكتب لنا رضاك و عفوك و الجنة ‏اللهم عوِّضني بما يرضيك ويرضيني وتحبه وأحبه أكثر 🤍 ‏اللهم ارزقني حلاوة اللسان وسحر البيان والطلاقة في التبيان و احلل عقدة من لساني ‏ياربّ صبّ علي من حنانك مايرضي خاطري ، ومن أمانك مايحفّ قلبي، ومن توفيقك مايجعلني أشعر بأن حظ الدنيا بين يديّ   ‏ولا تجعل في رفقتي شقاء، ولا من وجودي عبء، ولا في حديثي أذيّة، ربي اجعلني خفيف العبور باقي الأثر  ‏اللهم إننا نسألك النور في أبصارنا والبصيرة في عقولنا، واليقين في قلوبنا والاخلاص في اعمالنا، والنقاء في انفسنا، والسعة في رزقنا، والصحة في ابداننا،  ونحمدك يا الله ونشكرك على ما انعمت به علينا",
        "وارزقنا الجنة من غير حساب ولا سابق عذاب ووالدينا🤍  ‏يارب لا تجعلني اظلم احد لا قولا ولا فعلا وجملني باخلاقي وخلقي واحسن ذكري في حضوري وغيابي   ‏اللهم ألبسني العافية حتى تهنيني بالمعيشة، واختم لي بالمغفرة حتى لا تضرني الذنوب، واكفني كل هول دون الجنة حتى تبلغنيها.",
        " ‏اللهم السعة التي تجعل كل شيء هيّن وليّن و سهل و مُطمئن في قلوبنا ‏يا رب السّاعات المستجابات اجبُرْ خاطري جبراً أنت وليّه أسألك يا رب أن تستقيم حياتي وأن لا أضيع في زحام الطريق وأن لا أُخيَّر بين أحبِّ أشيائي ربي أسعدني واشرحْ صدري وأرِحْ قلبي ويسّرْ لي أمري اللهُم إني أستودعك راحتي فاجعلني أسعد خلقك بكَ",
        "اللهم إنا نسألك أن​ تحفظ علينا نعمك التي لا تحصى ولا تعد وأن ترزقنا حلو​ ​الحياة، وسعة الرزق، وراحة البال، ولباس​ ​العافية، وحسن الخاتمة، والفردوس الأعلى من الجنة🤍",
        "في يوم الجمعة اللهم أغمر قلبي وقلب من احب بالسعادة والعافية وراحة البال والستر والرزق💖 ‏اللهم اجعلني واهلي ومن احببت من أصحاب الحظوظ العظيمه وحبب قلوب خلقك وملائكتك فينا وسخرهم لنا، ربي ارفع قدري وقدرهم وإنصرني وانصرهم وتولنا في من توليت وحقق مطلبنا وبشرنا بما ننتظر منك ياخير المبشرين🌿🤍✨ ‏اللّهـم ارفع شأني وقدري وذكري في الدنيـا والآخرة وأحسِن ذكري بين العالميـن وأغنني عنهـم وسخّـر لي الأرض ومن عليهـا والسماء ومن فيهـا وجمّل حظي وأيامي ولساني واخلاقي واجعلني من احبابـك يا ربّ العالميـن 🤍  ",
        "اللهم أحيينا مستورين وأمتنا مستورين وابعثنا مستورين وأكرمنا بلقائك مستورين  اللهم استرنا فوق الأرض واسترنا تحت الأرض  واسترنا يوم العرض  اللهم اشف مرضانا ومرضى المسلّمين وارحم موتانا وموتى المسلّمين واقض حوائجنا وحوائج السائلين  اللّهم تولّ أمورنا وفرج همومنا واكشف كروبنا ‏",
        "اللهُم باعد بيني وبين الأكتئاب وكثرة التَفكير وأجعلُني مواظبًا على صلاتّي وأهدني إليك، ولا ترني فيمن أحب شرًا، وساعدني علي الأستمرار فقد ضاق كُل شيء، ووفقني وحقق لي ما اتمني، وأغفر لي وسامحني وأجب دعواتي يا الله فأنت مُجيب الدعوات",
        "اللهم يا كافل العباد وواهب الأرزاق وموزع العطايا  ارزقنا نوراً في القلب وضياءً في الوجه وعافيةً في البدن وسعةً في المال والعلم والعمل وحُسن الصفات وصلاح الأعمال والنوايا ، اللهم سترك وعفوك وودك وحُبك وقربك ورضاك ولذة النظر إلى وجهك الكريم .   ‌‏اللهم في يوم الجمعة أجعل أدعيتنا كالغيّث تروي بها قبر أبي اللهم اجعله من أسعد السُعداء في قبره واجعله في ضمانك وأمانك وإحسانك اللهم بلّل عطش روحه من أنهار جنتك وأروي قبره رحمة ومغفرةً وعفواً من عندك إنك أنت الرحيمُ الكريم و موتانا و موتى المسلمين أجمعين ",
        "اللهم في يوم الجمعة مُدَّني بالصبر على الإجابة ولا تجعلني عجولًا ملولًا علِّمني الإلحاح دون كللٍ أو قنوط وبلِّغني ما أطلب أو الرضا إن لم تأذن به🤍 ‏اللهم في يوم الجمعة بلغنا المتسع واليسر في كل امورنا، اللهم سعادة القلب ومغفرة الذنب وقُرة العين وجميل البشائر",
        "يا من دبر ليوسف أمره ، دبر لي أمري وأصلح حالي وأمري كله ، اللهم اقض حاجتي وفك كربتي وآنس وحدتي وفرج همي. اللهم يا مدبر الليلِ والنهار؛ بدل ضيقي لفرج وعجزي لقوة وأحلامي لواقع واخرجني من حولي إلى حولك وقُل لما أتمناه من أمري أن يكون فإنه لا يُعجزك ولا يصعب عليك شيء. ‏اللهم يا ﴿مالك المُلك﴾ يا ﴿مَن بيده المُلك﴾ يا ﴿مَن بيده ملكوت كل شيء﴾ يا ﴿مَن بيدك الخير﴾ يا ﴿مَن يداه مبسوطتان﴾ يا ﴿مَن يُدبِّر الأمر﴾ يا ﴿مَن إليه يُرجَع الأمر كله﴾ يا ﴿مَن يُجيب المضطر﴾ يا﴿مَن يَكشِف السوء﴾ يا﴿مَن يُجير ولا يُجار عليه﴾ ارحمني ارزقني اغفرلي ‏اللهم في يوم الجمعة",
        "اللهم اجعلني من الذين يشكرونك في السراء والضراء",
        " أسألك أن لا تحيّرني ولا تخيّرني في أموري ربي دُلني على الطريق الذي يطمئن فيه قلبي ولا تضلني ووجهني وأكتب لي الخيرة فيما أختار يارب كن بقربي في كل خطواتي ‏يّـارب أجعُل ما أسعى",
        "اللهم ارزقني سعادة وطمأنينة لا تزول",
        "اللهم اجعلني من الذين يتواصون بالحق ويتواصون بالصبر",
        "اللهم اجعلني من الذين يسيرون في الطريق المستقيم",
        "اللهم اجعلني من أهل التقوى",
        "اللهم اجعلني من الذين يلقون السلام ويؤدون الأمانة",
        "اللهم اجعلني من الذين يقرأون القرآن ويعملون به",
        "اللهم اجعلني من الذين يدعونك ويخلصون في الدعاء",
        "اللهم اجعلني من الذين ينالون بركتك في الدنيا والآخرة",
        "اللهم اجعلني من الذين يذكرونك في كل حين",
        "اللهم اجعلني من الذين يسيرون على النية الطيبة",
        "اللهم اجعلني من الذين يستغفرونك في الليل والنهار",
        "اللهم اجعلني من الذين يحسنون الظن بك",
        "اللهم اجعلني من الذين يثابون عندك",
        "اللهم اجعلني من الذين يعفون عن الناس",
        "اللهم اجعلني من الذين يدعون للآخرين بالخير",
        "اللهم اجعلني من الذين يسيرون في خدمة الآخرين",
        "اللهم اجعلني من الذين يحبون من حولهم بصدق",
        "اللهم اجعلني من الذين يقدرون النعم ويحمدونك عليها",
        "اللهم اجعلني من الذين يواجهون الحياة بثبات",
        "اللهم اجعلني من الذين يفتحون أبواب الرزق",
        "اللهم اجعلني من الذين يحققون أهدافهم برضاك",
        "اللهم اجعلني من الذين يبتسمون دائمًا",
        "اللهم اجعلني من الذين يرفعون معنويات الآخرين",
        "اللهم اجعلني من الذين يساعدون في كل ما هو خير",
        "اللهم اجعلني من الذين يعفون عن الآخرين",
        "اللهم اجعلني من الذين يغفرون للآخرين",
        "اللهم اجعلني من الذين يزرعون المحبة في قلوب الناس",
        "اللهم اجعلني من الذين يسيرون في طاعتك",
        "اللهم اجعلني من الذين يثقون فيك",
        "اللهم اجعلني من الذين يتعاونون مع الآخرين في الخير",
        "اللهم اجعلني من الذين يحبونك أكثر من أي شيء",
        "اللهم اجعلني من الذين يطهرون قلبهم من الحسد والكره",
        "اللهم اجعلني من الذين يراعون حقوق الآخرين",
        "اللهم اجعلني من الذين يرحمون الناس",
        "اللهم اجعلني من الذين يتحملون الشدائد بإيمان",
        "اللهم اجعلني من الذين يدعونك بصدق ويجدون إجابتك",
        "اللهم اجعلني من الذين لا يشكون في قدرتك",
        "اللهم اجعلني من الذين يحرصون على السلام بين الناس",
        "اللهم اجعلني من الذين يحققون السلام الداخلي",
        "اللهم اجعلني من الذين يرضون بما قسمته لهم",
        "اللهم اجعلني من الذين يحسنون تدبير حياتهم",
        "اللهم اجعلني من الذين يستغلون وقتهم في الطاعة",
        "اللهم اجعلني من الذين يستعينون بك في كل أمر",
        "اللهم اجعلني من الذين يعبدونك بصدق وإخلاص",
        "اللهم اجعلني من الذين يحسنون إلى من حولهم",
        "اللهم اجعلني من الذين ينشرون الخير أينما كانوا",
        "اللهم اجعلني من الذين يتسامحون مع الآخرين",
        "اللهم اجعلني من الذين يبذلون كل جهد لنجاحهم",
        "اللهم اجعلني من الذين يطلبون العفو منك في كل وقت",
        "اللهم اجعلني من الذين يسيرون في طريقك بحذر",
        "اللهم اجعلني من الذين يوفقون في حياتهم",
        "اللهم اجعلني من الذين يوفقون لأداء الصلاة على وقتها",
        "اللهم اجعلني من الذين يفعلون الخير في كل وقت",
        "اللهم اجعلني من الذين يحققون النجاح في الدنيا والآخرة"
    ];

    const duasContainer = document.getElementById("duas-container");

    duas.forEach((dua) => {
        const duaDiv = document.createElement("div");
        duaDiv.classList.add("dua");
        duaDiv.innerHTML = `<p>${dua}</p>`;
        duasContainer.appendChild(duaDiv);
    });
});