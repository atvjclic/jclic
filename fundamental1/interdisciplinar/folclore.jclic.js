if(JClicObject){JClicObject.projectFiles["folclore.jclic"]="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<JClicProject name=\"folclore\" version=\"0.1.3\"><settings><title>Folclore<\/title><revision description=\"created\" date=\"8/15/10\" /><author name=\"Darlan Diego Pereira Gomes\" rol=\"Professor\" /><language>português (pt)<\/language><descriptors level=\"3º e 4º ano\" /><skin file=\"@simple.xml\" /><\/settings><sequence><item id=\"start\" name=\"Apresentacao\" navButtons=\"back\" /><item name=\"Exploracao\" /><item name=\"Exploracao2\" /><item name=\"AssociacaoTextoImagem\" delay=\"1\" navButtons=\"back\" /><item name=\"AssociacaoComplexa\" delay=\"1\" navButtons=\"back\" /><item name=\"JogoMemoria\" delay=\"1\" navButtons=\"back\" /><item name=\"QuebraCabeca\" delay=\"1\" navButtons=\"back\" /><item name=\"RespostaEscrita\" delay=\"1\" /><item name=\"CacaPalavras\" delay=\"1\" /><item name=\"Final\" navButtons=\"back\" /><\/sequence><activities><activity class=\"@panels.InformationScreen\" name=\"Apresentacao\"><messages /><settings margin=\"8\" report=\"false\"><container bgColor=\"0xC0C0C0\"><counters time=\"false\" actions=\"true\" score=\"true\" /><\/container><window bgColor=\"0xC0C0C0\" border=\"true\" /><\/settings><cells rows=\"1\" cols=\"1\" border=\"false\" image=\"Lendas do Folclore Brasileiro-resized.jpg\"><style shadow=\"true\"><font family=\"Arial\" size=\"48\" bold=\"true\" /><color foreground=\"0x0033CC\" background=\"0xFFFFFF\" shadow=\"0xCCCCCC\" /><\/style><shaper class=\"@Holes\" cols=\"1\" rows=\"1\"><shape comment=\"0\">rectangle:0.60625,0.74,0.2775,0.061667<\/shape><\/shaper><cell><media type=\"RUN_CLIC_ACTIVITY\" level=\"1\" file=\"Exploracao\" /><\/cell><\/cells><\/activity><activity class=\"@associations.ComplexAssociation\" name=\"AssociacaoComplexa\"><messages><cell type=\"initial\"><style><font family=\"Arial\" size=\"28\" bold=\"true\" /><color background=\"0xFFFFFF\" /><\/style><p>Descubra quem sou eu!<\/p><\/cell><cell type=\"final\"><style><font family=\"Arial\" size=\"36\" bold=\"true\" /><color foreground=\"0x0033FF\" background=\"0xFFFFFF\" /><\/style><p>Parabéns, continue assim!<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><counters time=\"false\" actions=\"true\" score=\"true\" /><\/container><window bgColor=\"0xC0C0C0\" border=\"true\" /><\/settings><cells rows=\"12\" cols=\"1\" cellWidth=\"667.0\" cellHeight=\"39.0\" border=\"true\" id=\"primary\"><style><font family=\"Arial\" size=\"17\" bold=\"true\" /><color background=\"0xCCFFCC\" /><\/style><shaper class=\"@Rectangular\" cols=\"1\" rows=\"12\" /><cell id=\"0\"><p>Pulo em uma perna só<\/p><\/cell><cell id=\"0\"><p>Uso um cachimbo<\/p><\/cell><cell id=\"0\"><p>Sou muito peralta<\/p><\/cell><cell id=\"0\"><p>Apareço dentro de um redemoinho<\/p><\/cell><cell id=\"1\"><p>Meus pés são virados para trás<\/p><\/cell><cell id=\"1\"><p>Espantos os caçadores que não respeitam as leis da natureza<\/p><\/cell><cell id=\"1\"><p>Meus cabelos são vermelhos<\/p><\/cell><cell id=\"1\"><p>Eu solto assovios agudos para assustar e confundir caçadores e lenhadores.<\/p><\/cell><cell id=\"2\"><p>Levo os pescadores para o fundo do rio<\/p><\/cell><cell id=\"2\"><p>Tenho os olhos verdes<\/p><\/cell><cell id=\"2\"><p>Sou uma linda Sereia<\/p><\/cell><cell id=\"2\"><p>Gosto de me banhar nos rios<\/p><\/cell><\/cells><cells rows=\"3\" cols=\"1\" cellWidth=\"303.0\" cellHeight=\"65.0\" border=\"true\" id=\"secondary\"><style><font family=\"Arial\" size=\"26\" bold=\"true\" /><color background=\"0xFFFF99\" /><\/style><shaper class=\"@Rectangular\" cols=\"1\" rows=\"3\" /><cell><p>Sou o Saci<\/p><\/cell><cell><p>Sou o Curupira<\/p><\/cell><cell><p>Sou a Iara<\/p><\/cell><\/cells><scramble times=\"31\" primary=\"true\" secondary=\"true\" /><layout position=\"AB\" /><\/activity><activity class=\"@associations.SimpleAssociation\" name=\"AssociacaoTextoImagem\"><messages><cell type=\"initial\"><style><font family=\"Arial\" size=\"22\" bold=\"true\" /><color background=\"0xFFFFFF\" /><\/style><p>Ligue os nomes dos personagens do folclore brasileiro as suas imagens<\/p><\/cell><cell type=\"final\"><style><font family=\"Arial\" size=\"36\" /><color foreground=\"0x000099\" background=\"0xFFFFFF\" /><\/style><p>Parabéns!!!<\/p><\/cell><cell type=\"finalError\"><style><font family=\"Arial\" size=\"28\" bold=\"true\" /><color background=\"0xFFFFFF\" /><\/style><p>Tente novamente!<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xFFFFFF\"><counters time=\"false\" actions=\"true\" score=\"true\" /><\/container><window bgColor=\"0x333333\" border=\"true\" /><\/settings><cells rows=\"2\" cols=\"4\" cellWidth=\"239.0\" cellHeight=\"142.0\" border=\"true\" id=\"primary\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><shaper class=\"@Rectangular\" cols=\"4\" rows=\"2\" /><cell><p>Saci Pererê<\/p><\/cell><cell><p>Curupira<\/p><\/cell><cell><p>Boitata<\/p><\/cell><cell><p>Boto cor de rosa<\/p><\/cell><cell><p>Boi Bumbá<\/p><\/cell><cell><p>Iara<\/p><\/cell><cell><p>Mula sem cabeça<\/p><\/cell><cell><p>Lobisomen<\/p><\/cell><\/cells><cells rows=\"2\" cols=\"4\" cellWidth=\"239.0\" cellHeight=\"142.0\" border=\"true\" id=\"secondary\"><style><color background=\"0xFFFFFF\" /><\/style><shaper class=\"@Rectangular\" cols=\"4\" rows=\"2\" /><cell image=\"saciperere.gif\" /><cell image=\"Curupira.png\" /><cell image=\"boitata.gif\" /><cell image=\"boto-cor-de-rosa1.gif\" /><cell image=\"12.gif\" /><cell image=\"Iara-resized.jpg\" /><cell image=\"MULA_S~1.JPG\" /><cell image=\"Lobisomem.gif\" /><\/cells><scramble times=\"31\" primary=\"true\" secondary=\"true\" /><layout position=\"AUB\" /><\/activity><activity class=\"@textGrid.WordSearch\" name=\"CacaPalavras\"><messages><cell type=\"initial\"><style><font family=\"Arial\" size=\"28\" bold=\"true\" /><color foreground=\"0x0033CC\" background=\"0xFFFFFF\" /><\/style><p>Encontre as palavras escondidas<\/p><\/cell><cell type=\"final\"><style><font family=\"Arial\" size=\"36\" bold=\"true\" /><color foreground=\"0x0000CC\" background=\"0xFFFFFF\" /><\/style><p>Parabéns!!!<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><counters time=\"false\" actions=\"true\" score=\"true\" /><\/container><window bgColor=\"0xC0C0C0\" border=\"true\" /><\/settings><textGrid rows=\"17\" columns=\"16\" cellWidth=\"20.0\" cellHeight=\"20.0\" border=\"true\"><style><color background=\"0xFFFFFF\" /><\/style><text><row>ABC***M******S***<\/row><row>DOF***U******A***<\/row><row>GII***L******C***<\/row><row>*B****A******IARA<\/row><row>*U****S******P***<\/row><row>*M****E******E***<\/row><row>*B****M******R**B<\/row><row>*Á****C******E**O<\/row><row>******A******R**I<\/row><row>****LOBISOMEMÊ**T<\/row><row>******E*********A<\/row><row>******Ç*********T<\/row><row>******A*********Á<\/row><row>*****************<\/row><row>*BOTOCORDEROSA***<\/row><row>********CURUPIRA*<\/row><\/text><\/textGrid><clues><clue id=\"0\">MULASEMCABEÇA<\/clue><clue id=\"1\">BOTOCORDEROSA<\/clue><clue id=\"2\">SACIPERERÊ<\/clue><clue id=\"3\">CURUPIRA<\/clue><clue id=\"4\">BOIBUMBÁ<\/clue><clue id=\"5\">LOBISOMEM<\/clue><clue id=\"6\">IARA<\/clue><clue id=\"7\">BOITATÁ<\/clue><\/clues><cells rows=\"8\" cols=\"1\" cellWidth=\"160.0\" cellHeight=\"30.0\" border=\"true\" id=\"secondary\"><style /><shaper class=\"@Rectangular\" cols=\"1\" rows=\"8\" /><cell><p>Mula sem cabeça<\/p><\/cell><cell><p>Boto cor de rosa<\/p><\/cell><cell><p>Saci Pererê<\/p><\/cell><cell><p>Curupira<\/p><\/cell><cell><p>Boi Bumbá<\/p><\/cell><cell><p>Lobisomem<\/p><\/cell><cell><p>Iara<\/p><\/cell><cell><p>Boitatá<\/p><\/cell><\/cells><layout position=\"AB\" /><\/activity><activity class=\"@panels.Explore\" name=\"Exploracao\"><messages><cell type=\"initial\"><style><color background=\"0xFFFFFF\" /><\/style><p>Clique na minha imagem e conheça um pouco sobre a minha lenda<\/p><\/cell><cell type=\"final\"><style><font family=\"Arial\" size=\"36\" bold=\"true\" /><color foreground=\"0x0033FF\" background=\"0xFFFFFF\" /><\/style><p>Viu como foi legal!<\/p><\/cell><\/messages><settings margin=\"8\" report=\"false\"><container bgColor=\"0xC0C0C0\"><counters time=\"false\" actions=\"true\" score=\"true\" /><\/container><window bgColor=\"0xC0C0C0\" border=\"true\" /><\/settings><cells rows=\"4\" cols=\"1\" cellWidth=\"215.0\" cellHeight=\"110.0\" border=\"true\" id=\"primary\"><style><font family=\"Arial\" size=\"17\" bold=\"true\" /><color background=\"0xFFFFFF\" /><\/style><shaper class=\"@Rectangular\" cols=\"1\" rows=\"4\" /><cell id=\"0\" image=\"saciperere.gif\" /><cell id=\"1\" image=\"boitata.gif\" /><cell id=\"2\" image=\"boto-cor-de-rosa1.gif\" /><cell id=\"3\" image=\"Iara-resized.jpg\" /><\/cells><cells rows=\"4\" cols=\"1\" cellWidth=\"718.0\" cellHeight=\"250.0\" border=\"true\" id=\"secondary\"><style><color background=\"0xFFFFFF\" /><\/style><shaper class=\"@Rectangular\" cols=\"1\" rows=\"4\" /><cell><p>O saci-pererê é representado por um menino negro que tem apenas uma perna. Sempre com seu cachimbo e com um gorro vermelho que lhe dá poderes mágicos. Vive aprontando travessuras e se diverte muito com isso. Adora espantar cavalos, queimar comida e acordar pessoas com gargalhadas.<\/p><\/cell><cell><p>Representada por uma cobra de fogo que protege as matas e os animais e tem a capacidade de perseguir e matar aqueles que desrespeitam a natureza. Acredita-se que este mito é de origem indígena e que seja um dos primeiros do folclore brasileiro. Foram encontrados relatos do boitatá em cartas do padre jesuíta José de Anchieta, em 1560. Na região nordeste, o boitatá é conhecido como \"fogo que corre\".<\/p><\/cell><cell><p>Acredita-se que a lenda do boto tenha surgido na região amazônica. Ele é representado por um homem jovem, bonito e charmoso que encanta mulheres em bailes e festas. Após a conquista, leva as jovens para a beira de um rio e as engravida. Antes de a madrugada chegar, ele mergulha nas águas do rio para transformar-se em um boto.<\/p><\/cell><cell><p>A lenda conta que a linda sereia fica nos rios do norte do país, onde costuma viver. Nas pedras das encostas, costuma atrair os homens com seu belo e irresistível canto. As vítimas costumam seguir Iara até o fundo dos rios, local de onde nunca mais voltam. Os poucos que conseguem voltar acabam ficando loucos em função dos encantamentos da sereia. Neste caso, conta a lenda, somente um ritual realizado por um pajé (chefe religioso indígena, curandeiro) pode livrar o homem do feitiço.<\/p><\/cell><\/cells><scramble times=\"31\" primary=\"false\" /><layout position=\"AB\" /><\/activity><activity class=\"@panels.Explore\" name=\"Exploracao2\"><messages><cell type=\"initial\"><style><font family=\"Arial\" size=\"26\" bold=\"true\" /><color background=\"0xFFFFFF\" /><\/style><p>Clique na minha imagem e conheça um pouco sobre a minha lenda<\/p><\/cell><cell type=\"final\"><style><font family=\"Arial\" size=\"36\" bold=\"true\" /><color foreground=\"0x0033FF\" background=\"0xFFFFFF\" /><\/style><p>Viu como foi legal!<\/p><\/cell><\/messages><settings margin=\"8\" report=\"false\"><container bgColor=\"0xC0C0C0\"><counters time=\"false\" actions=\"true\" score=\"true\" /><\/container><window bgColor=\"0xC0C0C0\" border=\"true\" /><\/settings><cells rows=\"4\" cols=\"1\" cellWidth=\"215.0\" cellHeight=\"110.0\" border=\"true\" id=\"primary\"><style><font family=\"Arial\" size=\"17\" bold=\"true\" /><color background=\"0xFFFFFF\" /><\/style><shaper class=\"@Rectangular\" cols=\"1\" rows=\"4\" /><cell id=\"0\" image=\"Curupira.png\" /><cell id=\"1\" image=\"MULA_S~1.JPG\" /><cell id=\"2\" image=\"12.gif\" /><cell id=\"3\" image=\"Lobisomem.gif\" /><\/cells><cells rows=\"4\" cols=\"1\" cellWidth=\"718.0\" cellHeight=\"250.0\" border=\"true\" id=\"secondary\"><style><color background=\"0xFFFFFF\" /><\/style><shaper class=\"@Rectangular\" cols=\"1\" rows=\"4\" /><cell><p>Assim como o boitatá, o curupira também é um protetor das matas e dos animais silvestres. Representado por um anão de cabelos compridos e com os pés virados para trás. Persegue e mata todos que desrespeitam a natureza. Quando alguém desaparece nas matas, muitos habitantes do interior acreditam que é obra do curupira. <\/p><\/cell><cell><p>Surgido na região interior, conta que uma mulher teve um romance com um padre. Como castigo, em todas as noites de quinta para sexta-feira é transformada num animal quadrúpede que galopa e salta sem parar, enquanto solta fogo pelas narinas.<\/p><\/cell><cell><p>Em uma fazenda com muitos animais vivia também um boi muito bonito que era querido por todos. Principalmente por seu dono, que o adorava. Com o dono do boi, trabalhava Negro Francisco. Sua esposa estava esperando um bebê.<\/p><p>Um certo dia ela ficou com desejo de comer língua de boi, do boi mais bonito da fazenda, o boi de seu patrão.<\/p><p>O Negro Francisco foi atrás do boi pegar a sua língua, pois não queria que seu filho nascesse com cara de língua.<\/p><p>Quando o fazendeiro descobriu, mandou os índios que moravam em suas terras, caçarem Negro Francisco que, asustado, saiu correndo ao encontro do pajé para pedir ajuda. <\/p><p>O pajé conseguiu fazer com que o boi ficasse vivo e tivesse sua língua novamente deixando todos muito surpresos, inclusive o dono do boi.<\/p><p>Muito felizes porque Catinrinsa comeu a língua e o boi ainda estava forte e bonito como sempre, todos fizeram uma grande festa para comemorar.<\/p><\/cell><cell><p>Este mito aparece em várias regiões do mundo. Diz o mito que um homem foi atacado por um lobo numa noite de lua cheia e não morreu, porém desenvolveu a capacidade de transforma-se em lobo nas noites de lua cheia. Nestas noites, o lobisomem ataca todos aqueles que encontra pela frente. Somente um tiro de bala de prata em seu coração seria capaz de matá-lo.<\/p><\/cell><\/cells><scramble times=\"31\" primary=\"false\" /><layout position=\"AB\" /><\/activity><activity class=\"@panels.InformationScreen\" name=\"Final\"><messages><cell type=\"initial\"><style /><p>Clique na imagem da atividade para refazer.<\/p><\/cell><\/messages><settings margin=\"8\" report=\"false\"><container bgColor=\"0xC0C0C0\"><counters time=\"false\" actions=\"true\" score=\"true\" /><\/container><window bgColor=\"0xC0C0C0\" border=\"true\" /><\/settings><cells rows=\"1\" cols=\"1\" border=\"false\" image=\"Lendas do Folclore Brasileiro 2-resized.jpg\"><style /><shaper class=\"@Holes\" cols=\"1\" rows=\"1\"><shape comment=\"0\">rectangle:0.11625,0.53,0.23375,0.136667<\/shape><shape comment=\"1\">rectangle:0.37875,0.531667,0.23125,0.138333<\/shape><shape comment=\"2\">rectangle:0.645,0.533333,0.22875,0.138333<\/shape><shape comment=\"3\">rectangle:0.11875,0.69,0.22875,0.14<\/shape><shape comment=\"4\">rectangle:0.375,0.686667,0.235,0.143333<\/shape><shape comment=\"5\">rectangle:0.64125,0.688333,0.23625,0.14<\/shape><\/shaper><cell><media type=\"RUN_CLIC_ACTIVITY\" level=\"1\" file=\"Associação texto e imagem\" /><\/cell><cell><media type=\"RUN_CLIC_ACTIVITY\" level=\"1\" file=\"Associação Complexa\" /><\/cell><cell><media type=\"RUN_CLIC_ACTIVITY\" level=\"1\" file=\"Jogo da Memória\" /><\/cell><cell><media type=\"RUN_CLIC_ACTIVITY\" level=\"1\" file=\"Quebra cabeça\" /><\/cell><cell><media type=\"RUN_CLIC_ACTIVITY\" level=\"1\" file=\"Resposta Escrita\" /><\/cell><cell><media type=\"RUN_CLIC_ACTIVITY\" level=\"1\" file=\"Caça Palavras\" /><\/cell><\/cells><\/activity><activity class=\"@memory.MemoryGame\" name=\"JogoMemoria\" code=\"\"><description /><messages><cell type=\"initial\"><style><font family=\"Arial\" size=\"20\" bold=\"true\" /><color background=\"0xFFFFFF\" /><\/style><p>Encontre os pares das imagens e palavras<\/p><\/cell><cell type=\"final\"><style><font family=\"Arial\" size=\"48\" bold=\"true\" /><color background=\"0xFFFFFF\" /><\/style><p>Muito Bom!<\/p><\/cell><cell type=\"finalError\"><style><font family=\"Arial\" size=\"28\" bold=\"true\" /><color background=\"0xFFFFFF\" /><\/style><p>Tente Novamente!<\/p><\/cell><\/messages><settings margin=\"8\" report=\"false\"><container bgColor=\"0xFFFFFF\"><counters time=\"false\" actions=\"true\" score=\"true\" /><\/container><window bgColor=\"0x0000CC\" border=\"true\" /><\/settings><cells rows=\"4\" cols=\"4\" cellWidth=\"250.0\" cellHeight=\"250.0\" border=\"true\" id=\"primary\"><style><font family=\"Arial\" size=\"17\" bold=\"true\" /><color background=\"0xFFFFFF\" /><\/style><shaper class=\"@Rectangular\" cols=\"4\" rows=\"4\" /><cell image=\"12.gif\" /><cell image=\"MULA_S~1.JPG\" /><cell image=\"boitata.gif\" /><cell image=\"Curupira.png\" /><cell image=\"saciperere.gif\" /><cell image=\"boto-cor-de-rosa1.gif\" /><cell image=\"Iara-resized.jpg\" /><cell image=\"Lobisomem.gif\" /><cell><p>Boi Bumbá<\/p><\/cell><cell><p>Mula sem cabeça<\/p><\/cell><cell><p>Boitatá<\/p><\/cell><cell><p>Curupira<\/p><\/cell><cell><p>Saci Pererê<\/p><\/cell><cell><p>Boto cor de rosa<\/p><\/cell><cell><p>Iara<\/p><\/cell><cell><p>Lobisomen<\/p><\/cell><\/cells><scramble times=\"31\" /><layout position=\"AB\" /><\/activity><activity class=\"@puzzles.DoublePuzzle\" name=\"QuebraCabeca\"><messages><cell type=\"initial\"><style><font family=\"Arial\" size=\"26\" bold=\"true\" /><color background=\"0xFFFFFF\" /><\/style><p>Monte o Quebra-Cabeça<\/p><\/cell><cell type=\"final\"><style><font family=\"Arial\" size=\"26\" bold=\"true\" /><color foreground=\"0x0000FF\" background=\"0xFFFFFF\" /><\/style><p>Excelente!<\/p><\/cell><\/messages><settings margin=\"8\" dragCells=\"true\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xFFFFFF\"><counters time=\"false\" actions=\"true\" score=\"true\" /><\/container><window bgColor=\"0x000099\" border=\"true\" /><\/settings><cells rows=\"5\" cols=\"5\" border=\"true\" image=\"1oslendarios3-resized.jpg\"><style /><shaper class=\"@ClassicJigSaw\" cols=\"5\" rows=\"5\" /><\/cells><scramble times=\"31\" /><layout position=\"AB\" /><\/activity><activity class=\"@text.WrittenAnswer\" name=\"RespostaEscrita\"><messages><cell type=\"initial\"><style><font family=\"Arial\" size=\"26\" bold=\"true\" /><color background=\"0xFFFFFF\" /><\/style><p>Escreva o nome do personagem do folclore!<\/p><\/cell><cell type=\"final\"><style><font family=\"Arial\" size=\"28\" bold=\"true\" /><color foreground=\"0x0066FF\" background=\"0xFFFFFF\" /><\/style><p>Você é muito bom!<\/p><\/cell><cell type=\"finalError\"><style><font family=\"Arial\" size=\"26\" bold=\"true\" /><color foreground=\"0xFF0000\" background=\"0xFFFFFF\" /><\/style><p>Tente novamente!<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0x33FFFF\"><counters time=\"false\" actions=\"true\" score=\"true\" /><\/container><window bgColor=\"0x000000\" border=\"true\" /><\/settings><cells rows=\"1\" cols=\"8\" cellWidth=\"117.0\" cellHeight=\"119.0\" border=\"true\" id=\"primary\"><style><color background=\"0xFFFFFF\" /><\/style><shaper class=\"@Rectangular\" cols=\"8\" rows=\"1\" /><cell id=\"0\" image=\"12.gif\" /><cell id=\"1\" image=\"boto-cor-de-rosa1.gif\" /><cell id=\"2\" image=\"boitata.gif\" /><cell id=\"3\" image=\"Curupira.png\" /><cell id=\"4\" image=\"Iara-resized.jpg\" /><cell id=\"5\" image=\"MULA_S~1.JPG\" /><cell id=\"6\" image=\"saciperere.gif\" /><cell id=\"7\" image=\"Lobisomem.gif\" /><\/cells><cells rows=\"1\" cols=\"8\" cellWidth=\"117.0\" cellHeight=\"30.0\" border=\"true\" id=\"answers\"><style><font family=\"Arial\" size=\"17\" bold=\"true\" /><color background=\"0xFFFFFF\" /><\/style><shaper class=\"@Rectangular\" cols=\"8\" rows=\"1\" /><cell><p>Boi Bumbá<\/p><\/cell><cell><p>Boto cor de rosa<\/p><\/cell><cell><p>Boitatá<\/p><\/cell><cell><p>Curupira<\/p><\/cell><cell><p>Iara<\/p><\/cell><cell><p>Mula sem cabeça<\/p><\/cell><cell><p>Saci Pererê<\/p><\/cell><cell><p>Lobisomem<\/p><\/cell><\/cells><cells rows=\"1\" cols=\"8\" cellWidth=\"50.0\" cellHeight=\"30.0\" border=\"true\" id=\"solvedPrimary\"><style /><shaper class=\"@Rectangular\" cols=\"8\" rows=\"1\" /><cell><p>Boi Bumbá<\/p><\/cell><cell><p>Boto cor de rosa<\/p><\/cell><cell><p>Boitatá<\/p><\/cell><cell><p>Curupira<\/p><\/cell><cell><p>Iara<\/p><\/cell><cell><p>Mula sem cabeça<\/p><\/cell><cell><p>Saci Pererê<\/p><\/cell><cell><p>Lobisomem<\/p><\/cell><\/cells><scramble times=\"31\" primary=\"false\" /><layout position=\"AUB\" /><\/activity><\/activities><mediaBag><media name=\"12.gif\" file=\"12.gif\" /><media name=\"boitata.gif\" file=\"boitata.gif\" /><media name=\"boto-cor-de-rosa1.gif\" file=\"boto_cor_de_rosa1.gif\" /><media name=\"Lobisomem.gif\" file=\"lobisomem.gif\" /><media name=\"saciperere.gif\" file=\"saciperere.gif\" /><media name=\"1oslendarios3-resized.jpg\" file=\"1oslendarios3_resized.jpg\" /><media name=\"Iara-resized.jpg\" file=\"iara_resized.jpg\" /><media name=\"Lendas do Folclore Brasileiro 2-resized.jpg\" file=\"lendas_do_folclore_brasileiro_2_resized.jpg\" /><media name=\"Lendas do Folclore Brasileiro-resized.jpg\" file=\"lendas_do_folclore_brasileiro_resized.jpg\" /><media name=\"MULA_S~1.JPG\" file=\"mula_s_1.jpg\" /><media name=\"Curupira.png\" file=\"curupira.png\" /><\/mediaBag><\/JClicProject>\r\n";}
