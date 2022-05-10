// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

var ini = document.getElementById("ini");
var taberna = document.getElementById("taberna");
var atmosphere = document.getElementById("atmosphere");
var peleas = document.getElementById("peleas");
var lince = document.getElementById("lince");

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>20-05-2152 Refugio J100</h1>\
		<p class = transient><img src='media/games/tutorial/cabum.jpg' class='float_left'></p>\
		<p>Hace 100 años que el mundo entró en la tercera guerra mundial, tras una guerra convencional finalmente alguna nación empezó a usar las bombas nucleares y todas lanzaron a su vez.\
		Algunos pudieron refugiarse en refugios preparados para la ocasión, entre ellos tu familia. La gran mayoría murieron y muchos otros sufrieron los efectos de la radiación y el invierno nuclear.\
		</p>\
		<p> Mientras que los habitantes de los refugios sobrevivían con purificadores, cultivos hidropónicos y reactores nucleares en miniatura en el yermo exterior se levantaban de entre las ruinas los habitantes creando pequeños asentamientos con lo que tenían a su alcance.  \
		</p>\
		<p class = transient><img src='media/games/tutorial/yermo.jpg' class='float_left'></p>\
		<p>Eres un habitante del refugio J100, con apenas 18 años, llevas viviendo aquí toda tu vida, de tu familia solo te queda tu tía Josefina, tus padres murieron hace años debido a una epidemia de cólera que hubo en el refugio cuando el purificador de agua se estropeó.</p>\
		<p>Tu tía se hizo cargo de ti pues apenas tenías 4 años y desde entonces siempre has vivido con ella, aunque sois bien distintos la quieres como es.\
		Ella siempre ha querido que seas parte del refugio y tengas algún puesto de responsabilidad en este, aunque tú te has metido en líos varias veces ella siempre te ha sacado de ellos.\
		Pero tú por tu parte siempre has pensado más allá de las paredes del refugio y te han llamado la atención las historias de antes de la guerra que se contaban dentro del refugio.</p>\
		<p class = transient><img src='media/games/tutorial/refugio.jpg' class='float_left'></p>\
		<p>Con todo esto hace ya varios años que sabes por rumores de los guardias del refugio que el gobernador del refugio periódicamente comercia con caravanas del exterior y que este es relativamente habitable, pues si no, nadie quedaría fuera para comerciar.\
		Desde hace semanas llevas preparándote para escapar de aquí con tu <a href='./mejora-fuerza'>Fuerza</a>, <a href='./mejora-destreza'>Destreza</a>,\
		<a href='./mejora-inteligencia'>Inteligencia</a> y <a href='./mejora-suerte'>Suerte</a> además de varias herramientas preparas un <a href='hub'>plan de huída.</a></p>\
		",
		{
			actions: {
                'mejora-fuerza': function(character, system, action) {
					if(character.qualities.stats>0){
                    system.setQuality("fuerza", character.qualities.fuerza+1);
					system.setQuality("stats", character.qualities.stats-1);
					}
                },
				'mejora-destreza': function(character, system, action) {
					if(character.qualities.stats>0){
                    system.setQuality("destreza", character.qualities.destreza+1);
					system.setQuality("stats", character.qualities.stats-1);
					}
                },
				'mejora-inteligencia': function(character, system, action) {
					if(character.qualities.stats>0){
                    system.setQuality("inteligencia", character.qualities.inteligencia+1);
					system.setQuality("stats", character.qualities.stats-1);
					}
                },
				'mejora-suerte': function(character, system, action) {
					if(character.qualities.stats>0){
                    system.setQuality("suerte", character.qualities.suerte+1);
					system.setQuality("stats", character.qualities.stats-1);
					}
                }
            }
			
		}
    ),
	ganzua: new undum.SimpleSituation(
	"<p>Te escapas por el interior del refugio con tu  más que probada destreza abriendo las cerraduras con pinzas para el pelo, mientras que nadie te ve pues te escabulles como una sabandija sin ser detectado. Llegas a la puerta del despacho del administrador del refugio y la abres sin problema.</p>\
	<p class = transient><img src='media/games/tutorial/ganzua.jpg' class='float_left'></p>\
	<p>Una vez dentro del despacho buscas la tarjeta de acceso de repuesto de el administrador del refugio para poder abrir la puerta del refugio, buscando entre los cajones das con un documento que tiene el apellido de tu familia, lo examinas y ves que no eras hijo único, si no que tenías un hermano mellizo.\
	Tu hermano según el documento fue entregado a unos comerciantes del exterior durante la gran plaga de cólera en la que murieron tus padres a cambio de medicinas. Todo esto te causa bastante shock y frustración contra los habitantes del refugio. Te llevas el documento y al poco rato encuentras la tarjeta.</p>\
	<p>Con la tarjeta en el bolsillo te vas hacia el vestíbulo y esperas al cambio de guardia para abrir la tremenda puerta que hay allí cerrada desde hace semanas. Esta al abrirse activa una alarma y hace bastante ruido, por lo que sales corriendo hacia el exterior con la mayor rapidez posible. Al llegar al <a href='salida'>exterior ves por primera vez la luz solar a poco de anochecer.</a> </p>\
	",
	{
	tags: ["topic"],
        optionText: "Tratas de ir sigilosamente y usas una ganzúa.",
        displayOrder: 1,
		canChoose: function(character, system, host) {
                return character.qualities.destreza > 3;
            },
	}
	),
	conver: new undum.SimpleSituation(
	"<p>Te diriges a la oficina del gobernador donde te espera uno de los guardias, con tu inteligencia y tu bata de científico robada lo convences en base a palabrería científica de que debe de dejarte pasar porque necesitas una de las llaves para el reactor del refugio que solo están en esa oficina.</p>\
	<p class = transient><img src='media/games/tutorial/cientifico.jpg' class='float_left'></p>\
	<p>Una vez dentro del despacho buscas la tarjeta de acceso de repuesto de el administrador del refugio para poder abrir la puerta del refugio, buscando entre los cajones das con un documento que tiene el apellido de tu familia, lo examinas y ves que no eras hijo único, si no que tenías un hermano mellizo.\
	Tu hermano según el documento fue entregado a unos comerciantes del exterior durante la gran plaga de cólera en la que murieron tus padres a cambio de medicinas. Todo esto te causa bastante shock y frustración contra los habitantes del refugio. Te llevas el documento y al poco rato encuentras la tarjeta.</p>\
	<p>Con la tarjeta en el bolsillo te vas hacia el vestíbulo y esperas al cambio de guardia para abrir la tremenda puerta que hay allí cerrada desde hace semanas. Esta al abrirse activa una alarma y hace bastante ruido, por lo que sales corriendo hacia el exterior con la mayor rapidez posible. Al llegar al <a href='salida'>exterior ves por primera vez la luz solar a poco de anochecer.</a> </p>\
	",
	{
	tags: ["topic"],
        optionText: "Te pones una bata y tratas de convencer a los guardias con tu inteligencia sobre ciencia.",
        displayOrder: 2,
		canChoose: function(character, system, host) {
                return character.qualities.inteligencia > 3;
            },
	}
	),
	duelo: new undum.SimpleSituation(
	"<p>Te armas con un tubo de metal bien duro y vas cuidadosamente hacia la puerta del despacho del administrador, cuando llegas, ves a un guardia esperando, te lanzas sobre él con el tubo y lo sorprendes, dejándolo insconciente con un par de golpes, abres la puerta con las llaves del guardia.</p>\
	<p class = transient><img src='media/games/tutorial/fuerza.jpg' class='float_left'></p>\
	<p>Una vez dentro del despacho buscas la tarjeta de acceso de repuesto de el administrador del refugio para poder abrir la puerta del refugio, buscando entre los cajones das con un documento que tiene el apellido de tu familia, lo examinas y ves que no eras hijo único, si no que tenías un hermano mellizo.\
	Tu hermano según el documento fue entregado a unos comerciantes del exterior durante la gran plaga de cólera en la que murieron tus padres a cambio de medicinas. Todo esto te causa bastante shock y frustración contra los habitantes del refugio. Te llevas el documento y al poco rato encuentras la tarjeta.</p>\
	<p>Con la tarjeta en el bolsillo te vas hacia el vestíbulo y esperas al cambio de guardia para abrir la tremenda puerta que hay allí cerrada desde hace semanas. Esta al abrirse activa una alarma y hace bastante ruido, por lo que sales corriendo hacia el exterior con la mayor rapidez posible. Al llegar al <a href='salida'>exterior ves por primera vez la luz solar a poco de anochecer.</a> </p>\
	",
	{
	tags: ["topic"],
        optionText: "Decides que entrarás por la fuerza al despacho del administrador sea como sea.",
        displayOrder: 3,
		canChoose: function(character, system, host) {
                return character.qualities.fuerza > 3;
            },
	}
	),
	suertudo: new undum.SimpleSituation(
	"<p>Tienes tanta suerte que los guardias parecen ni siquiera mirar en tu dirección, llegas al despacho del gobernador y te encuentras la llave del despacho en una maceta cercana a la puerta. Entras sin problema.</p>\
	<p class = transient><img src='media/games/tutorial/trebol.jpg' class='float_left'></p>\
	<p>Una vez dentro del despacho buscas la tarjeta de acceso de repuesto de el administrador del refugio para poder abrir la puerta del refugio, buscando entre los cajones das con un documento que tiene el apellido de tu familia, lo examinas y ves que no eras hijo único, si no que tenías un hermano mellizo.\
	Tu hermano según el documento fue entregado a unos comerciantes del exterior durante la gran plaga de cólera en la que murieron tus padres a cambio de medicinas. Todo esto te causa bastante shock y frustración contra los habitantes del refugio. Te llevas el documento y al poco rato encuentras la tarjeta.</p>\
	<p>Con la tarjeta en el bolsillo te vas hacia el vestíbulo y esperas al cambio de guardia para abrir la tremenda puerta que hay allí cerrada desde hace semanas. Esta al abrirse activa una alarma y hace bastante ruido, por lo que sales corriendo hacia el exterior con la mayor rapidez posible. Al llegar al <a href='salida'>exterior ves por primera vez la luz solar a poco de anochecer.</a> </p>\
	",
	{
	tags: ["topic"],
        optionText: "Vas confiado en ti mismo y en tu suerte hacia la puerta del despacho del administrador.",
        displayOrder: 4,
		canChoose: function(character, system, host) {
                return character.qualities.suerte > 3;
            },
	}
	),
	salida: new undum.SimpleSituation(
	"<p>Al ver el sol ponerse por primera vez te quedas paralizado viendo algo tan bonito por primera vez pues solo sabías que eso ocurría por los libros que has leído. Al poco de terminar el anochecer ves salir la luna llena y piensas en tu hermano perdido y en las ganas que tienes de explorar ese enorme aunque ruinoso mundo. A lo lejos ves unas luces de lo que parece ser un asentamiento.</p>\
	<p><img src='media/img/asentamiento.jpg' class='float_left'></p>\
	<p><a href='caminoasentamiento1'>Te pones rumbo hacia las luces que ves a lo lejos con cuidado.</a></p>\
	",
	{
		enter: function (character, system, from) {
                atmosphere.play();

            }
	}
	),
	caminoasentamiento1: new undum.SimpleSituation(
        "<h1>Camino al asentamiento</h1>\
		<p>Intrigado por ver qué clase de cosas hay en ese asentamiento, decides poner rumbo hacía\
		allí. A lo lejos ves como una caravana de personas se acerca al asentamiento con\
		intención de entrar.</p>\
		<p><img src='media/img/rodando.gif' class='float_left'></p>\
		<p>Distraído por aquella visión te tropiezas con una raíz mutante que\
		nace del suelo con la mala suerte de que caes rodando por una cuesta hacia abajo. Te\
		levantas del suelo flipando de lo tonto que eres, y te percatas que al fondo del camino\
		que conecta con la cuesta hay una especie de agujero en la pared. Tienes curiosidad por\
		saber qué puede haber en el agujero, por lo que vas a ver que hay dentro. Está demasiado\
		oscuro pero puedes intuir una especie de esqueleto de humanoide con 4 piernas, el cual\
		contiene en su mano algo que brilla gracias al reflejo de la poca luz que entra en el agujero.\
		Te acercas, le abres la mano al esqueleto y <a class='once' href='./chapa'>coges lo que tiene en su interior</a>,\
		o haces caso a tu querida tía con los peligros del yermo y <a class ='once' href='./nada'>no tocas nada</a>.</p>\
		",
		{
			actions: {
                "chapa": function (character, system, action) {
					system.setQuality("chapaDorada", true);        //FIXME: cambiar esta basura de imagen
                    system.write("<p><img src='media/img/sarpullido.jpg' class='float_left'></p>\
					<p>Coges lo que tiene en su interior, es una chapa dorada que no\
					sabes para qué sirve, así que optas por guardarla en tu bolsillo. Al sacar tu\
					mano del bolsillo notas un escozor que te quema la mano. Te fijas más detenidamente\
					y te está saliendo un sarpullido con no muy buena pinta</p>"); //FIXME: cambiar el css para que p no salga con un hueco al principio
					if(character.qualities.skill>0){system.setQuality("destreza", character.qualities.skill-1);}  //FIXME: cambiar la iluminacion a rojo 
					system.setQuality("sarpullido", true);
					system.setCharacterText("<p>Añades chapa dorada a tu inventario</p>\
					<p>Conseguiste un sarpullido radiactivo, enhorabuena</p>\
					<p>Has perdido destreza por el sarpullido</p>");					
					system.doLink("caminoasentamiento2");
                },
				"nada": function (character, system, action) {
                    system.write("<p>No tocas nada.</p>");
					system.doLink("caminoasentamiento2");
                }
            }
		}
    ),
	
	caminoasentamiento2: new undum.SimpleSituation(
        "<p>Justo antes de marcharte te fijas que en el suelo entre las piernas del esqueleto\
		hay una especie de cilindro gris. Decides <a class='once' href='./linterna'>cogerlo</a> sin tocar nada más\
		o <a class='once' href='./nada'>no lo coges</a> puesto que parece no tener ninguna importancia.</p>\
		",
		{
			actions: {
                "linterna": function (character, system, action) {
					system.setQuality("linterna", true);
                    system.setCharacterText("<p>Añades linterna a tu inventario</p>");
                    system.write("<p><img src='media/img/linterna.jpg' class='float_left'></p>\
					<p>Decides cogerlo sin tocar nada más. Lo miras bien, observas que\
					el cilindro tiene un botón que no puedes evitar pulsar y ves como sale del aparato un\
					destello que dura un segundo, parece ser una especie de linterna. Sigues pulsando el\
					botón pero no notas ningún cambio, así que te lo guardas por si acaso.</p>");
					system.doLink("entradaasentamiento");
                },
				"nada": function (character, system, action) {
                    system.write("<p>No lo coges.</p>");
					system.doLink("entradaasentamiento");
                }
            }
		}
    ),
	
	entradaasentamiento: new undum.SimpleSituation(
        "<h1>Entrada al asentamiento</h1>\
		<p><img src='media/img/puertaAsentamiento.png' class='float_left'></p>\
		<p>Te pones de nuevo en marcha hasta llegar al asentamiento, y una vez allí, te encuentras\
		con los guardianes de la puerta que te miran de arriba a abajo.</p>\
		<p>Al verte con esa ropa\
		característica del refugio donde has vivido toda tu vida, se miran con una sonrisa malévola. </p>\
		<p> - Guardias: Para pasar necesitas pagar la entrada</p>\
		<p> - P: �Entrada? Est� bien... deja que mire en  <a class='once' href='./bolsillo'>mis bolsillos</a>.\
		</p>\
		",
		{
			actions: {
                "bolsillo": function (character, system, action) {
					if (character.qualities.chapaDorada == true) {
						system.write("<p class = transient><a href='./chapa'>Les puedes dar la chapa dorada</a> que encontraste anteriormente,\
						también <a href='./suerte'>te puedes inventar una historia trágica</a> de algo que nunca te sucedió,\
						para dar pena y poder así entrar, o <a href='./entrar'>te vas de allí</a> blasfemando en voz baja.\
						</p>");
					}else{
						system.write("<p>Puesto que no tienes nada, <a href='./suerte'>te inventas una historia trágica</a> de algo\
						que nunca te sucedió, para dar pena y poder así entrar, o <a href='./entrar'>te vas\
						de allí</a> blasfemando en voz baja.</p>");	
					}
                },
				"chapa": function (character, system, action) {
					system.setQuality("chapaDorada", false);
					system.setCharacterText("<p>Has perdido la chapa dorada</p>");
					system.write("<p>Les entregas la chapa dorada.</p>");
					system.write("<p> - P: Esto me parece una entrada razonable.</p>");
					system.write("<p> - Guardias: No parece demasiado valioso, a�n as� te dejaremos entrar por esta vez .</p>");
					system.doLink("asentamiento");
                },
				"suerte": function (character, system, action) {
					if (character.qualities.suerte >= 3) {
						system.write("<p>Te inventas una historia de como salvaste a un perrito.</p>");
						system.write("<p> - P: ...y as� es como salv� a ese peque�o perrito .</p>");
						system.write("<p> - Guardias: Eres todo un h�roe, nos hemos emocionado, te dejaremos pasar.</p>");
						system.doLink("asentamiento");
					} else {
						system.write("<p>Te inventas un cuento sobre un restaurante.</p>");
						system.write("<p> - P: ...Y as� es como me acab� todos los platos del restaurante .</p>");
						system.write("<p> - Guardias: �Y a nosotros que nos cuentas? �Fuera de aqu� ahora mismo! .</p>");
						system.doLink("./entrar");
					}
                },
				"entrar": function (character, system, action) {
					system.write("<p> Después de que los guardias no te dejaran entrar entrar en el asentamiento, buscas otra manera\
						de colarte. Las murallas del asentamiento están construidas con chatarra y madera\
						en mal estado como si de una barricada mal hecha se tratara, por lo que decides rodear\
						la muralla en busca de alguna apertura lo suficientemente grande para colarte.</p>\
						<p><img src='media/img/agujero.jpg' class='float_left'></p>\
						<p>Rodeas las murallas hasta que ves un agujero que es bastante pequeño pero que con un\
						poquito de esfuerzo crees que puedes entrar. Así pues, miras a tu alrededor antes de\
						entrar por si alguien te puede estar viendo. Al no haber moros en la costa procedes a\
						colarte por el agujero con precaución de no pincharte con ningún hierro o madera\
						putrefacta. Lo estás haciendo muy bien hasta que escuchas un ruido afuera por donde\
						rodeaste la muralla, por lo que te das prisa en atravesar el dichoso agujero.</p>");
					system.doLink("entrada2/entrar");
                }
            }
		}
    ),
	entrada2: new undum.SimpleSituation(
        "",
		{
			actions: {
                "entrar": function (character, system, action) {
					if (character.qualities.destreza > 2) {
						system.write("<p><a href='asentamiento'>Lo atraviesas a toda velocidad</a> con la mala suerte de que rajas\
						tu traje del refugio con un metal afilado que sobresalía de la muralla, pero no le das más importancia, lo\
						importante es que has conseguido entrar</p>");
					}else{
						//system.delay(0.1);
						system.write("<p><a href='asentamiento'>Lo atraviesas a toda velocidad</a> con la mala suerte de que te rajas\
						el hombro y tu traje del refugio con un metal afilado que sobresalía de la muralla. Te duele\
						y notas como tu brazo ha perdido fuerza\
						pero no le das más importancia, lo importante es que has conseguido entrar</p>");
						if(character.qualities.fuerza>=1){
						system.setQuality("fuerza", character.qualities.fuerza-1);
						}
						system.setCharacterText("<p>Has perdido fuerza por la herida</p>");
					}
                }
            }
			//optionText: "",
			//canView: function(character, system, host) {
            //    return character.qualities.destreza > 2;
            //}
		}
    ),
	asentamiento: new undum.SimpleSituation(
        "<h1>Asentamiento</h1>\
		<p>Te fijas en tu alrededor y te quedas asombrado de la cantidad de luces que hay, de\
		la gente tan rara que hay para ti haciendo su vida, y de las casas y comercios, que son\
		chapuzas fabricadas con materiales reciclados. Ahora caes en que la vida en el refugio\
		era un lujo. También te percatas de un cartel al fondo del asentamiento que pone 'Taberna'.\
		Estás muerto de sed por lo que decides ir allí para pedir un vaso de agua aunque sea.</p>\
		<p><img src='media/img/taberna.jpg' class='float_left'></p>\
		<p>Una vez dentro, vas directamente a la barra y llamas al tabernero. Le pides que te ponga un\
		vaso de agua porque estás deshidratado, y él te mira detenidamente. Antes de servirte el\
		vaso de agua, te dice que no eres de por aquí y que deberías de tener cuidado de con quién\
		te juntas. Seguís hablando un buen rato, parece ser que el tabernero tiene un buen palique\
		y también te advierte sobre los peligros del yermo de Jaén. Por lo visto, las malas\
		lenguas hablan de que existen 3 bichos mutantes bastante poderosos que no tienen piedad\
		con las personas que se acercan a sus guaridas y nadie de todas las personas que han ido\
		en busca de ellos ha sobrevivido para contarlo.</p>\
		<p><img src='media/img/olivo.jpg' class='float_left'></p>\
		<p>El primero de ellos lo encuentras en la ciénaga del Olivar, una ciénaga enorme llena de\
		olivos y cubierta de una densa neblina de color verde-marrón, situado al norte del\
		asentamiento donde mucha gente ha desaparecido por intentar robar las tan preciadas\
		aceitunas y nadie sabe qué ha sido de ellos. Curiosamente, esta zona es la única del yermo\
		de Jaén con tierra fértil para cultivar, y se cree que lo que esconde la ciénaga es la causa\
		principal de que no se pueda cultivar bien en todo el resto de la región.</p>\
		<p><img src='media/img/dragon.gif' class='float_left'></p>\
		<p>La historia del segundo monstruo mutante es que en una montaña enorme, llamada la\
		Montaña de Malena, situada no muy lejos del cruce con el Gran Eje, al suroeste de la región\
		de Jaén y la cuál está plagada de necrófagos, se ha avistado alguna vez una especie de lagarto\
		con alas volando y escupiendo humo radiactivo. En la cima de aquella montaña está el Gran\
		Castillo de Lord Malena y se dice que esconde un gran tesoro que el Lagarto solo quiere proteger.</p>\
		<p><img src='media/img/senior.jpg' class='float_left'></p>\
		</p>El último de ellos, y no por ello menos importante, se encuentra en el Coliseo, un antro de\
		mala muerte, donde los pobladores de Jaén más desalmados van a ver las sangrientas\
		batallas entre esclavos por mera diversión. Pues bien, se dice que quién lo regenta es un\
		ser oscuro que trafica con niños para luego convertirlos en luchadores a muerte,\
		maltratándolos y esclavizándolos sin ningún tipo de piedad, esos niños crecen sin cultivar\
		ningún tipo de sentimiento. También, cuentan que utiliza los cuerpos de los luchadores\
		muertos para experimentar con ellos y convertirlos en androides, una especie de robots,\
		extirpando las partes de sus cuerpos dañadas.</p>\
		<p>Después de dejarte la cabeza como un bombo, le das las gracias por el vaso de agua, y te\
		vas de allí pitando para que el tabernero no te hable más ni te cuente leyendas inventadas.\
		Justo antes de salir de la taberna cruzas miradas con un hombre con bigote y capucha que\
		está sentado solo, y al segundo te hace un gesto para que te sientes con él.</p>\
		<p><img src='media/img/encapuchado.jpg' class='float_left'></p>\
		<p>Puesto que\
		no tienes nada mejor que hacer vas con él. Te sientas y te fijas en que le falta un brazo,\
		pero por educación no le preguntas qué le pasó. Lo primero que te pregunta es cuándo te\
		has escapado; y tú, con cara de sorpresa, le dices que te has escapado hoy mismo del\
		refugio. Entonces empieza a contarte la historia de un chico que era idéntico a ti que\
		hace 5 años estuvo en esta misma taberna, lo cual te recuerda a tu hermano mellizo\
		perdido, y que se fue dirección al sur con una chica del asentamiento. Sorprendido\
		por esta noticia no dudas en salir en su búsqueda. Antes de irte, el extraño te ofrece una\
		daga de chatarra diciéndote que él ya no la iba a necesitar más.</p>\
		<p class = transient><a href='./daga'>Coges la daga\
		</a>sin pensarlo ya que no sabes cuándo te puede venir bien, o <a href='./nada'>no la coges\
		</a>puesto que tú eres un ser de luz y no tienes intención de hacerle daño a nadie.</p>\
		",
		{
			enter: function (character, system, from) {
				atmosphere.pause();
				taberna.play();
            },
			actions: {
                "daga": function (character, system, action) {
					system.setQuality("daga", true);
					system.setCharacterText("<p>Añades daga a tu inventario</p>");
					system.write("<p>Coges la daga sin pensarlo ya que no sabes cuándo te puede venir bien.</p>");
					system.doLink("finalasentamiento");
				},
				"nada": function (character, system, action) {
					system.write("<p>No coges la daga puesto que tú eres un ser de luz y no tienes intención de hacerle daño a nadie.</p>");
					system.doLink("finalasentamiento");
                }
			}
		}
    ),
	finalasentamiento: new undum.SimpleSituation(
        "<p>Ya dispuesto para ir en busca de tu hermano, antes de salir por la puerta te fijas en la\
		caravana de gente que viste anteriormente y te acercas a husmear. Por lo visto, están\
		preparados ellos también para salir y te enteras de que van en dirección al sur, por lo que\
		recuerdas las palabras del tabernero hablándote de todos los peligros del yermo de Jaén y\
		decides preguntarles si puedes ir con ellos. Ellos no dudan en aceptarte ya que toda ayuda\
		y compañía en estos tiempos postapocalípticos es buena. Sin más dilación <a href='caravana/chapa'>ponéis rumbo\
		hacia el sur.</a></p>",
		{

			
		}
    ),
	caravana: new undum.SimpleSituation(
	    "",
		{
			enter: function (character, system, from) {
				taberna.pause();
                atmosphere.play();

            },
			actions: {
                "chapa": function (character, system, action) {
					if(character.qualities.chapaDorada==true){
						system.write("<h1>Viaje hacia el sur</h1>\
						<p>Mientras vais camino al sur, haces buenas migas con Mike Towers, un veterano del yermo que llevaba\
						años dirigiendo la caravana. Te habla de un libro muy útil para la supervivencia llamado 'Guía de supervivencia\
						en el yermo', y te dice que ya no lo va a necesitar más, por lo que te lo ofrece a cambio de unas chapas.\
						Tú no sabes ni a que se refiere pero tienes una chapa dorada, así que <a class='once' href='./dar'>se la das</a> a cambio del libro.</p>");
					}else{
						system.write("<h1>Viaje hacia el sur</h1>\
						<p>Mientras vais camino al sur, haces buenas migas con Mike Towers, un veterano del yermo que llevaba\
						años dirigiendo la caravana. Te habla de un libro muy útil para la supervivencia llamado 'Guía de supervivencia\
						en el yermo', y te dice que ya no lo va a necesitar más, por lo que te lo ofrece a cambio de unas chapas.\
						Tú no sabes ni a que se refiere por lo que <a class='once' href='./pedir'>le pides por favor</a> que te lo dé, que ya se lo pagarás.</p>");
					}
				},
				"dar": function (character, system, action) {
					system.setQuality("chapaDorada", false);
					system.setCharacterText("<p>Añades 'Guía de supervivencia' a tu inventario</p>\
					<p>Has ganado inteligencia gracias al libro</p>");
					system.setQuality("libro", true);
					system.setQuality("inteligencia", character.qualities.inteligencia+2);
					system.write("<p>Acepta el cambio, y te pones a leer como un loco, mientras seguís vuestro camino.</p>\
					<p>Después de varios kilómetros de viaje, te percatas que os llevan siguiendo desde el inicio una camioneta,\
					por lo que decides hablar con el conductor para que le pise al acelerador.</p>\
					<p><img src='media/img/caravana.png' class='float_left'></p>\
					<p>A pesar de aumentar la velocidad, la \
					camioneta de atrás empieza  también a acelerar, de manera que alcanza a la caravana y colisiona con ella \
					de manera que os desplazan hacia fuera de la carretera y varios locos de la carretera os asaltan. </p> \
					<p class = transient><a class='once' href='caravana2/defender' > Intentas defenderte  </a> pero a pesar de tus esfuerzos, eres capturado ya que ellos tenían más fuerza\
					o <a class='once' href='combate/primero'  >  dejas que te capturen, </a> ya que tienes todas las papeletas de ser capturado y perder fuerza. </p>");
				},
				"pedir": function (character, system, action) {
					if(character.qualities.suerte>=2){
						system.setCharacterText("<p>Añades 'Guía de supervivencia' a tu inventario</p>");
						system.setQuality("libro", true);
						system.setCharacterText("<p>Has ganado inteligencia gracias al libro</p>");
						system.setQuality("inteligencia", character.qualities.inteligencia+2);
						system.write("<p>Es tu día de suerte, Mike está de buen humor y se siente generoso, así pues te lo regala sin más. Una vez en tu posesión,\
						te pones a leer como un loco, mientras seguís vuestro camino.</p>\
						<p>Después de varios kilómetros de viaje, te percatas que os llevan siguiendo desde el inicio una camioneta,\
						por lo que decides hablar con el conductor para que le pise al acelerador.</p>\
						<p><img src='media/img/caravana.png' class='float_left'></p>\
						<p>A pesar de aumentar la velocidad, la \
						camioneta de atrás empieza  también a acelerar, de manera que alcanza a la caravana y colisiona con ella \
						de manera que os desplazan hacia fuera de la carretera y varios locos de la carretera os asaltan. </p> \
						<p class = transient><a class='once' href='caravana2/defender' > Intentas defenderte  </a> pero a pesar de tus esfuerzos, eres capturado ya que ellos tenían más fuerza\
						o <a class='once' href='combate/primero'  >  dejas que te capturen, </a> ya que tienes todas las papeletas de ser capturado y perder fuerza. </p>");
					}else{
						system.write("<p>Mike te dice que en esta vida no se prospera regalando cosas a desconocidos, por lo que se queda el libro para él y te vas de allí montando un drama.</p>\
						<p>Después de varios kilómetros de viaje, te percatas que os llevan siguiendo desde el inicio una camioneta,\
						por lo que decides hablar con el conductor para que le pise al acelerador.</p>\
						<p><img src='media/img/caravana.png' class='float_left'></p>\
						<p>A pesar de aumentar la velocidad, la \
						camioneta de atrás empieza  también a acelerar, de manera que alcanza a la caravana y colisiona con ella \
						de manera que os desplazan hacia fuera de la carretera y varios locos de la carretera os asaltan. </p> \
						<p class = transient><a class='once' href='caravana2/defender' > Intentas defenderte  </a> pero a pesar de tus esfuerzos, eres capturado ya que ellos tenían más fuerza\
						o <a class='once' href='combate/primero'  >  dejas que te capturen, </a> ya que tienes todas las papeletas de ser capturado y perder fuerza. </p>");
					}
				}
            }
		}
    ),
	caravana2: new undum.SimpleSituation(
	    "",
		{
			
			actions: {
                "defender": function (character, system, action) {
					if(character.qualities.fuerza >2){
						system.setQuality("fuerza", character.qualities.fuerza-2);
					}else{
						system.setQuality("fuerza", 0);
					}
					system.setCharacterText("<p>Has perdido fuerza por pelear</p>");
					system.write("<p>Intentas defenderte, pero a pesar de tus esfuerzos, <a href='combate/primero'> eres capturado</a> ya que ellos tenían más fuerza.</p>");
				}
            }
		}
    ),

	combate: new undum.SimpleSituation(
	 "",
		{
			enter: function (character, system, from) {
                atmosphere.pause();
				peleas.play();
            },
			actions: {
                "primero": function (character, system, action) {
					system.write("<h1>Coliseo</h1>");
					if(character.qualities.fuerza>0){
						system.write("<p>Después del ataque, despiertas en el hipogeo del coliseo y te enteras de que vas a\
						tener que pelear varias rondas. De un momento para otro, te encontrabas de estar\
						viajando en una caravana a estar en la arena para realizar peleas.<p>\
						<br/>\
						<p><img src='media/img/combate.jpg' class='float_left'></p>\
						<p>El primer combate tenía una duración de 45 min., en los cuales tenías que derrotar a 2 saqueadores,\
						donde uno era de peso ligero y otro de peso pesado. Contra el saqueador de peso ligero tenías que atacarle al torso\
						ya que iba con el torso a descubierto y cuyo escudo era más pequeño al tuyo debido a su peso, mientras que el otro saqueador,\
						 tenía un escudo era más grande respecto al tuyo y más fuerza, pero no podía moverse de manera rápida debido a su peso\
						 por lo que contra él debías de aplicar tus habilidades para poder cansarlo y atacarle cuando estuviera fatigado o intentando moverse.</p>\
						 <p>Trascurrido 30 min., el primer saqueador, debido a las heridas y el miedo a morir en la arena, declara su rendición alzando el brazo izquierdo con el dedo índice extendido, \
						 soltando el escudo. En este momento el combate era entre tú y el saqueador de peso pesado, el cuál te habia\
						 dejado muy tocado debido a su gran fuerza, pero no tenías mucho tiempo para derrotarlo. </p>\
						<p> Observas que detras del saqueador se encontraba el arma del otro saqueador, por lo que decides realizar un moviento de despieste para ir por detras y cogerla.\
						 con las dos armas, consigues derrotar al segundo saqueador y consagrarte para el público como  <a class = 'once' href=./segundo>nuevo héroe</a>.</p>\
						<br/>");
						if(character.qualities.fuerza >2){
							system.setQuality("fuerza", character.qualities.fuerza-2);
						}else{
							system.setQuality("fuerza", 0);
						}
						system.setCharacterText("<p>Has perdido fuerza por la pelea con los saqueadores</p>");
					}else{
						system.write("<p>Después del ataque, despiertas en el hipogeo del coliseo y te enteras de que vas a\
						tener que pelear varias rondas. De un momento para otro, te encontrabas de estar\
						viajando en una caravana a estar en la arena para realizar peleas.<p>\
						<br/>\
						<p><img src='media/img/combate.jpg' class='float_left'></p>\
						<p>En el primer combate era contra 2 saqueadores, a los cuales no consigues derrotar ya que no\
						tienes fuerza suficiente como para empuñar un arma, por lo que al segundo del combate, uno de\
						ellos te corta la cabeza y cae entre el público, quienes deciden jugar con tu cabeza pasandosela\
						entre todos.</p>\
						FIN.");
					}
				},
				"segundo": function (character, system, action) {
					if(character.qualities.fuerza>0 && character.qualities.destreza>=2){
						system.write("<h1>Segundo combate</h1>\
						<p>Cuando ibas a salir de la arena, anuncian que faltan dos combates para que el esclavo\
						salga con vida. Tal fue tu asombro y susto que no tenías fuerzas para moverte.</p>\
						<p><img src='media/img/lince.jpg' class='float_left'></p>\
						<br/>\
						<p>Consigues ganar el segundo combate, el cual era contra un lince mutante pero sabías cómo\
						atacar gracias a los videojuegos que jugabas cuando eras pequeño.</p>\
						<br/>");
						if(character.qualities.fuerza >2){
							system.setQuality("fuerza", character.qualities.fuerza-2);
						}else{
							system.setQuality("fuerza", 0);
						}
						system.setCharacterText("<p>Has perdido fuerza por la pelea contra el lince</p>");
						system.write("<p>Finalmente <a href=gladiador/combate>te enfrentas con el último combate</a>, un fuerte cyborg que\
						no había perdido nunca.</p>");
					}else if (character.qualities.fuerza==0){
						system.write("<h1>Segundo Combate</h1>\
						<p>Cuando ibas a salir de la arena, anuncian que faltan dos combates para que el esclavo\
						salga con vida. Tal fue tu asombro y susto que no tenías fuerzas para moverte.</p>\
						<p><img src='media/img/lince.jpg' class='float_left'></p>\
						<br/>\
						<p>Consigues llegar al segundo combate, el cual era contra un lince mutante, pero\
						no tienes suficiente fuerza como para atacarle, por lo que sin dudarlo el lince\
						te arranca la cabeza de un bocado. FIN.</p>");
					}else{
						system.write("<h1>Segundo Combate</h1>\
						<p>Cuando ibas a salir de la arena, anuncian que faltan dos combates para que el esclavo\
						salga con vida. Tal fue tu asombro y susto que no tenías fuerzas para moverte.</p>\
						<p><img src='media/img/lince.jpg' class='float_left'></p>\
						<br/>\
						<p>Consigues llegar al segundo combate, el cual era contra un lince mutante, pero\
						no tienes suficiente destreza como para esquivar sus ataques. El lince se avalanza\
						rápidamente sobre ti y te arranca la cabeza de un bocado. FIN.</p>");
					}
                }
			}
		}
    ),
	
	gladiador: new undum.SimpleSituation(
	 "",
		{
			actions: {
                "combate": function (character, system, action) {
					system.write("<h1>Combate final</h1>");
					if(character.qualities.inteligencia>=2 && character.qualities.fuerza>0){
						system.write("<p> El combate empieza tranquilo pero con  el tiempo el cansancio y el dolor de las\
						heridas causadas en los anteriores combates provocan que el campeón vaya a por ti con  \
						todo para acabar el combate. Pero gracias a tu inteligencia, durante el combate observas \
						que el punto débil del enemigo era un tubo de oxígeno, lo que le permitía al cyborg no tener fatiga \
						y estar siempre al 100% durante todo el combate.\
						En un momento consigues desconectar el cable que le proporcinaba el oxígeno, por lo que consigues \
						ganar el combate atacando y haciéndole que se cansase de manera rápida, ya que no disponía de oxígeno.</p>\
						<br/>");
						if(character.qualities.fuerza >2){
							system.setQuality("fuerza", character.qualities.fuerza-2);
						}else{
							system.setQuality("fuerza", 0);
						}
						system.setCharacterText("<p>Has perdido fuerza por la pelea</p>");
						system.write("<p><img src='media/img/muerte.jpeg' class='float_left'></p>\
						<p>Te declaran ganador y el líder te pide que le cortes la cabeza al cyborg. Tú no eras ese tipo\
						de personas, tú habías combatido por obligación no por gusto, por lo que decides <a  href='./quitar_mascara' >quitarle la \
						máscara al cyborg </a> para ver quién es o <a  href='./salir_correr' >irte </a> sin saber nada y con la mayor rapidez posible</p>");
					}else if (character.qualities.inteligencia<2){
						system.write("<p> El combate empieza tranquilo pero con  el tiempo el cansancio y el dolor de las\
						heridas causadas en los anteriores combates provocan que el campeón vaya a por ti con\
						todo para acabar el combate. No eres capaz de ver ningún punto débil en su postura, por lo que\
						consigue llegar hasta a ti y te corta el cuello sin siquiera haberte percatado. FIN.</p>");
					}else if (character.qualities.fuerza<2 && character.qualities.sarpullido == true){
						system.write("<p> El combate empieza tranquilo pero con  el tiempo el cansancio y el dolor de las\
						heridas causadas en los anteriores combates provocan que el campeón vaya a por ti con  \
						todo para acabar el combate. Gracias a tu inteligencia, durante el combate observas \
						que el punto débil del enemigo era un tubo de oxígeno, lo que le permitía al cyborg no tener fatiga \
						y estar siempre al 100% durante todo el combate. No eres capaz mover ningún músculo al no quedarte fuerzas ya\
						para pelear, por lo que consigue llegar hasta a ti, pero justo antes de que te ataque consigues coger\
						su tubo con tu mano leprosa. Sorprendentemente, tu mano radiactiva hace que se derrita el tubo de oxígeno, por lo que consigues \
						ganar el combate atacando y haciéndole que se cansase de manera rápida, ya que no disponía de oxígeno.</p>\
						<p><img src='media/img/muerte.jpeg' class='float_left'></p>\
						<p>Te declaran ganador y el líder te pide que le cortes la cabeza al cyborg. Tú no eras ese tipo\
						de personas, tú habías combatido por obligación no por gusto, por lo que decides <a  href='./quitar_mascara' >quitarle la \
						máscara al cyborg </a> para ver quién es o <a  href='./salir_correr' >irte </a> sin saber nada y con la mayor rapidez posible</p>");
					}else{
						system.write("<p> El combate empieza tranquilo pero con  el tiempo el cansancio y el dolor de las\
						heridas causadas en los anteriores combates provocan que el campeón vaya a por ti con\
						todo para acabar el combate. No eres capaz mover ningún músculo al no quedarte fuerzas ya\
						para pelear, por lo que consigue llegar hasta a ti y te corta el cuello sin siquiera poder hacer nada. FIN.</p>");
					}
				},
				"quitar_mascara": function (character, system, action) {
					system.setQuality("fuerza", character.qualities.fuerza+7);
					system.doLink("quitar");
				},
				 "salir_correr": function (character, system, action) {
					system.doLink("salir");
				}
            }
		}
	),
	
	quitar: new undum.SimpleSituation(
	 "<h1>Quitar la máscara</h1> \
        <p> Cuando le quitas la máscara al cyborg, descubres que esa persona con la \
		que habías estado combatiendo era tu hermano, al cual querías encontrar.   \
		Al descubrir que esa persona era tu hermano, decides no cortarle la cabeza y salir corriendo  \
		de allí, lo que provoca que el cacique se enfade y decida pelear contra ti. </p>\
		<br/>\
		<p>En este combate  tu hermano se une contigo para derrotar los dos al cacique y poder salir  \
		con vida del coliseo. Tras luchar y derrotar al cacique, tu hermano te explica que lo habían  \
		chantajeado con luchar para poder <a  href='escape1' >liberar a su mujer </a>.\
		</p> ",
		
	),

	escape1: new undum.SimpleSituation(
		"<h1>Escape del coliseo</h1> \
        <p>Aprovecháis el alboroto que se ha creado por la pelea para huir entre la multitud, al saber de la muerte del cacique los esclavos se han rebelado y hay luchas internas entre los saqueadores. Tu hermano te dice que cree saber donde está su amada y quiere ir a buscarla, \
		pero tu lo ves muy peligroso. Debes decidir entre <a  href='rescate' >acompañarle </a> o <a  href='convencer' >intentar convencerle de huir y buscar ayuda </a>.</p >"

	),
	convencer: new undum.SimpleSituation(
		"<h1>BAD ENDING: Escape del coliseo</h1> \
        <p>Intentas convencer a tu hermano de huir y buscar ayuda para rescatar a su esposa pero él se niega y corre en su búsqueda perdiendose en la multitud. Intentas \
		ir tras él pero lo has perdido de vista. No quieres volver a perder a tu hermano así que lo buscas sin parar hasta que el revuelo se calma. Aprovechando que todo está más calmado unos soldados se acercan y te detienen, un nuevo cacique se alza y te toman como nuevo campeón.</p>\
		<p><img src='media/img/nuevogladiador.jpg' class='float_left'></p>\
		"

	),
	rescate: new undum.SimpleSituation(
		"<img src='media/img/celda.jpg' width= 500 class= 'float_left' >\
        <p>Decides acompañarle y llegais hasta las mazmorras. Alli tu hermano grita el nombre de su mujer hasta que ella responde a lo lejos. Su mujer esta dentro de una celda asi que <a  href='./abrir' > intentas abrirla </a> </p >",
		{

			
			actions: {
				"abrir": function (character, system, action) {
					if (character.qualities.destreza > 0) {
						system.write("<p> Consigues abrir la celda rompiendo los barrotes que estaban en mal estado y salís huyendo del coliseo hasta llegar a un lugar seguro, decidís <a href='descanso'>Descansar ahí</a>.</p>");
					} else {
						system.write("<p>Intentas romper unos barrotes que están en mal estado pero no tienes fuerza suficiente. Unos soldados que corrían para calmar la revuelta os ven, os detienen y <a href='mfin'>os meten en la celda con la mujer de tu hermano.</a></p>");
					}
				}
			}
		}

	),
	descanso: new undum.SimpleSituation(
		"<h1>Claro del bosque</h1> \
		<img src='media/img/bosque.jpg' width= 500 class= 'float_left' >\
        <p>Os sentais sobre un tronco caido. Aprovechais el momento de calma para observar mejor el entorno y veis que os encontrais en un bosque rodeado de arboles. debes <a  href='./buscar_madera' >buscar madera </a>, \
		<a  href='./buscar_piedras' >buscar piedras</a> e intentar <a  href='./hacer_fuego' >hacer fuego</a></p >.", {
						enter: function (character, system, from) {
                peleas.pause();
				atmosphere.play();
            },
		actions: {
			"buscar_madera": function (character, system, action) {
				system.setQuality("madera", true);
				system.write("<p>Tras caminar unos cuantos pasos encuentras unas ramas. Son un poco raras, debe ser porque han crecido sobre un liquido morado desconocido, pero supones que te serviran.<\p>");
			},
			"buscar_piedras": function (character, system, action) {
				system.setQuality("piedra", true);
				system.write("<p>Te acercas a un riachuelo y encuentras dos brillantes rocas que parece que con el choque adecuado pueden producir una chispa<\p>.")
			},
			"hacer_fuego": function (character, system, action) {
				if (character.qualities.madera && character.qualities.piedra) {
					system.setQuality("piedra", false);
					system.setQuality("madera", false);
					system.write("<p class= transient><img src='media/img/hoguera.jpg' width = 500 class='float_left'></p>")
					system.write("<p>Junto a la luz tenue de la hoguera le preguntas a tu hermano sobre como llego al coliseo. Este te cuenta que tras salir del refugio y llegó a un asentamiento que se encontraba al sur de este. Vivía una vida tranquila, aunque con las obvias dificultades que este nuevo mundo impone.\
					En el asentamiento conoció a Sofía, su pareja, hija de uno de los granjeros de la zona. Al ver como la tierra no era muy fértil y cada vez producía menos comida decidieron irse hacia el sur en busca de mejores condiciones pero cuando llevaban algunos kilómetros los saqueadores del Cacique los asaltaron y tomaron prisioneros, a tu hermano lo usaron como gladiador y con toda su fuerza de voluntad y física luchó por poder volver a ver a su amada.\
					Ellos además te cuenta de como era la vida en el asentamiento antes de su secuestro y tú te das cuenta que antes eran felices pese a las dificultades. Decides <a href='bfin'>ir con ellos hacia el asentamiento.</a> o que <a href='nfin'>este no es tu lugar y que quieres seguir explorando mundo.</a><\p>");
				} else if (!character.qualities.madera && character.qualities.piedra) {
					system.write("<p>Aun necesitas <a  href='./buscar_madera' >buscar madera</a><\p>");
				} else if (character.qualities.madera && !character.qualities.piedra) {
					system.write("<p>Aun necesitas <a  href='./buscar_piedras' >buscar piedras</a><\p>");
				} else {
					system.write("<p>Necesitas <a  href='./buscar_madera' >recoger madera</a> y <a  href='./buscar_piedras' >recoger piedras</a> para hacer un fuego<\p>");
				}
			}
		}
	}

	),
		salir: new undum.SimpleSituation(
	 "<h1>BAD ENDING: Salir corriendo</h1> \
        <p> El cacique se enfada contigo por no terminar el combate como él quería  \
		cortando la cabeza del perdedor, por lo que decide combatir contra ti. El   \
		cyborg se quita la máscara como puede, revelando que es tu hermano,  \
		decides irte correndo hacia él para abrazarlo y comprobar si está bien después del combate. </p> \
		<p><img src='media/img/muertef.jpg' class='float_left'></p>\
		<p>Mientras ibas hacia tu hermano, sientes como un fuerte latigazo te pegaba en la espaldas, provocando que te  \
		 quedes totalmente inmovil. Habias descuidado el combate contra el cacique por la situación que estabas viviendo  \
		 en ese momento. Tras quedarte inmóvil el cacique te mata, provocando que tu tía se quede sola y tu hermano   \
		 no pueda salir de allí. </p>\
		 ",
	
    ),
	bfin: new undum.SimpleSituation(
	"<h1>GOOD ENDING: Te vas con tu hermano</h1>\
	<p>Te vas con tu hermano y su pareja al asentamiento, allí el padre de ella os recibe con gran alegría aunque en este tiempo ha perdido una mano por culpa de los animales salvajes.\
	Tu hermano y su pareja deciden que se van a quedar en la granja ayudando y tú te sientes uno más con ellos así que decides quedarte con ellos como un granjero más en esta tierra. Mientras tanto mucho de los esclavos y sirvientes del antiguo cacique llegan al asentamiento dispuestos a recuperar sus vidas.\
	</p>\
	<p><img src='media/img/farm.jpg' class='float_left'></p>\
	",
	),
	nfin: new undum.SimpleSituation(
	"<h1>NEUTRAL ENDING: Sigues tu camino de explorador del yermo.</h1>\
	<p>Te despides de tu hermano y su pareja, les prometes que intentarás volver aunque no es algo seguro, tú no sientes que este sea tu lugar y quieres seguir explorando y haciendo bien por este desolado yermo. Ellos te dan su bendición y sus mejores deseos mientras partes hacia lo desconocido.</p>\
	<p><img src='media/img/ending.gif' class='float_left'></p>\
	"
	),
	mfin: new undum.SimpleSituation(
	"<h1>BAD ENDING: Os devoran en la arena.</h1>\
	<p>Pese a lo cerca que os quedásteis de escapar de esta pesadilla los guardias no os dan tregua, os encadenan a las paredes y os vigilan día y noche. El nuevo cacique os quiere trofeo para su primer gran juego y no os va a dejar escapar. </p>\
	<p><img src='media/img/martires.jpg' class='float_left'></p>\
	<p>A los pocos días os sacan de allí y os atan en mitad de la arena para que os devoren las bestias del yermo como venganza por la huída y la muerte del anterior cacique. Además de vosotros hay un grupo de esclavos rebeldes encadenados. El cacique da un pomposo discurso y abren las celdas de los animales de las que salen grotescas figuras. Al poco tiempo no queda nadie de tu familia salvo tu tía con vida.</p>\
	",
	)
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    destreza: new undum.IntegerQuality(
        "Destreza", {priority:"0001", group:'stats'}
    ),
    fuerza: new undum.NumericQuality(
        "Fuerza", {priority:"0002", group:'stats'}
    ),
	inteligencia: new undum.NumericQuality(
        "Inteligencia", {priority:"0003", group:'stats'}
    ),
    suerte: new undum.NumericQuality(
        "Suerte", {priority:"0004", group:'stats'}
    ),
	sarpullido: new undum.OnOffQuality(
        "Sarpullido", { priority: "0005", group: 'stats', onDisplay: "&#9762;" }
    ),
	chapaDorada: new undum.OnOffQuality(
        "Chapa Dorada", { priority: "0001", group: 'inventario', onDisplay: "&#10003;" }
    ),
	linterna: new undum.OnOffQuality(
        "Linterna", { priority: "0002", group: 'inventario', onDisplay: "&#9732;" }
    ),
	daga: new undum.OnOffQuality(
        "Daga", { priority: "0003", group: 'inventario', onDisplay: "&#9876;" }
	),
	libro: new undum.OnOffQuality(
        "Libro", { priority: "0004", group: 'inventario', onDisplay: "&#10015;" }
	),
	madera: new undum.OnOffQuality(
		"Madera", { priority: "0006", group: 'inventario', onDisplay: "&#10003;" }
	),
	piedra: new undum.OnOffQuality(
		"Piedra", { priority: "0007", group: 'inventario', onDisplay: "&#10003;" }
	),
	stats: new undum.NumericQuality(
	"Stats a Repartir",{priority:"0005",group:'stats'}
	)
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
	inventario: new undum.QualityGroup('Inventario', { priority: "0002" })
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    character.qualities.destreza = 0;
    character.qualities.fuerza = 0;
    character.qualities.suerte = 0;
	character.qualities.inteligencia=0;
	character.qualities.stats=12;
    system.setCharacterText("<p>Estas son tus estadísticas y objetos.</p>");
	system.setQuality("chapaDorada", false);
	system.setQuality("sarpullido", false);
	system.setQuality("linterna", false);
	system.setQuality("daga", false);
	system.setQuality("libro", false);
	system.setQuality("piedra", false);
	system.setQuality("madera", false);
};
