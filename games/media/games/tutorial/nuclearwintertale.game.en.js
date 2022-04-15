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
		Desde hace semanas llevas preparándote para escapar de aquí con tu <a href='./mejora-fuerza'>Fuerza</a> o <a href='./mejora-destreza'>Destreza </a>\
		y tu <a href='./mejora-inteligencia'>Inteligencia</a> o <a href='./mejora-suerte'>Suerte</a> además de varias herramientas preparas un <a href='hub'>plan de huída.</a></p>\
		\
		",
		{
			actions: {
                'mejora-fuerza': function(character, system, action) {
                    system.setQuality("fuerza", character.qualities.fuerza+4);
                },
				'mejora-destreza': function(character, system, action) {
                    system.setQuality("destreza", character.qualities.destreza+4);
                },
				'mejora-inteligencia': function(character, system, action) {
                    system.setQuality("inteligencia", character.qualities.inteligencia+4);
                },
				'mejora-suerte': function(character, system, action) {
                    system.setQuality("suerte", character.qualities.suerte+4);
                }
            }
			
		}
    ),
	ganzua: new undum.SimpleSituation(
	"<p>Te escapas por el interior del refugio con tu  más que probada destreza abriendo las cerraduras con pinzas para el pelo, mientras que nadie te ve pues te escabulles como una sabandija sin ser detectado. Llegas a la puerta del despacho del administrador del refugio y la abres sin problema.</p>\
	<p class = transient><img src='media/games/tutorial/ganzua.jpg' class='float_left'></p>\
	<p>Una vez dentro del despacho buscas la tarjeta de acceso de repuesto de el administrador del refugio para poder abrir la puerta del refugio, buscando entre los cajones das con un documento que tiene el apellido de tu familia, lo examinas y ves que no eras hijo único, si no que tenías un hermano mellizo.\
	Tu hermano según el documento fue entregado a unos comerciantes del exterior durante la gran plaga de cólera en la que murieron tus padres a cambio de medicinas. Todo esto te causa bastante shock y frustración contra los habitantes del refugio. Te llevas el documento y al poco rato encuentras la tarjeta.</p>\
	<p>Con la tarjeta en el bolsillo te vas hacia el vestíbulo y esperas al cambio de guardia para abrir la tremenda puerta que hay allí cerrada desde hace semanas. Esta al abrirse activa una alarma y hace bastante ruido, por lo que sales corriendo hacia el exterior con la mayor rapidez posible. Al llegar al exterior ves por primera vez la luz solar a poco de anochecer. </p>\
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
	<p>Con la tarjeta en el bolsillo te vas hacia el vestíbulo y esperas al cambio de guardia para abrir la tremenda puerta que hay allí cerrada desde hace semanas. Esta al abrirse activa una alarma y hace bastante ruido, por lo que sales corriendo hacia el exterior con la mayor rapidez posible. Al llegar al exterior ves por primera vez la luz solar a poco de anochecer. </p>\
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
	<p>Con la tarjeta en el bolsillo te vas hacia el vestíbulo y esperas al cambio de guardia para abrir la tremenda puerta que hay allí cerrada desde hace semanas. Esta al abrirse activa una alarma y hace bastante ruido, por lo que sales corriendo hacia el exterior con la mayor rapidez posible. Al llegar al exterior ves por primera vez la luz solar a poco de anochecer. </p>\
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
	<p>Con la tarjeta en el bolsillo te vas hacia el vestíbulo y esperas al cambio de guardia para abrir la tremenda puerta que hay allí cerrada desde hace semanas. Esta al abrirse activa una alarma y hace bastante ruido, por lo que sales corriendo hacia el exterior con la mayor rapidez posible. Al llegar al exterior ves por primera vez la luz solar a poco de anochecer. </p>\
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
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    character.qualities.destreza = 0;
    character.qualities.fuerza = 0;
    character.qualities.suerte = 0;
	character.qualities.inteligencia=0;
    system.setCharacterText("<p>Estas son tus estadísticas y objetos.</p>");
};
