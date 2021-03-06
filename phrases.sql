CREATE TABLE conditions
(
    id integer NOT NULL DEFAULT nextval('conditions_id_seq'::regclass),
    code integer,
    sotho text,
    zulu text,
    xhosa text ,
    afrikaans text ,
    CONSTRAINT conditions_pkey PRIMARY KEY (id)
);

CREATE TABLE main
(
    id integer NOT NULL,
    sotho text NOT NULL,
    afrikaans text NOT NULL,
    xhosa text NOT NULL,
    zulu text NOT NULL
)


insert into main (id,sotho,afrikaans,xhosa,zulu) values (1,	"hlakisa",	"duidelik"	,"kucacile"	,"kucacile"),
(2,	"leru"	,"wolk",	"amafu",	"amafu")
,(3	,"letsatsi le likele"	,"sonnige"	,"ilanga"	,"ilanga")
,(4	,"pula"	,"reën"	,"imvula"	,"imvula"),
(5	,"moea"	,"wind",	"umoya",	"imvula");












insert into conditions (code,sotho,zulu,xhosa,afrikaans) values (200,'sefefo se nang le pula', 'ukuduma kwezulu ngemvula elula','ukuduma kwezulu ngemvula elula','donderstorm met ligte reën'),
(201,'sefefo se nang le pula', 'ukuduma kwemvula','ukuduma kwezulu nemvula','donderstorm met reën'),	 
(202,'sefefo se nang le pula e matla', 'ukuduma kwezulu ngemvula enkulu','iindudumo ezinemvula enkulu','donderstorm met ''n swaar reën'),	 
(210,'pula e matla ea sealuma', 'ukuduma kwezulu okukhanyayo','ukuduma kwezulu','lig donderstorm'),
(211,'sefefo se matla', 'ukuduma kwezulu ukuduma','Iindudumo','donderstorm'),
(212,'sefefo se matla sa sealuma', 'isithwathwa esinzima sezulu','iindudumo ezinkulu','swaar donderstorm'),	
(221,'sefefo se matla se matla', 'ukuduma okukhulu','ukuduma kwezulu','verskeurde donderstorm'),	
(230,'sefefo se nang le marulelo a khanyang', 'ukuduma kwezulu nokukhanya okukhanyayo','ukuduma kwezulu ngokukhawuleza','donderstorm met n ligte motreën'),	
(231,'sefefo se nang le marulelo', 'ukuduma kwezulu nge-drizzle','
ukuduma kweqabunga','donderstorm met n ligte motreën'),	
(232,'sefefo se nang le marulelo a maholo', 'ukuduma kwezulu','ukuduma kweemvula','donderstorm met ''n swaar drup'),	
(300,'ho khanya ho matla', 'ukukhanya okukhanya kakhulu','iindudumo ezinzima kakhulu','ligintensiteit motreën'),	
(301,'boreleli', 'ukubhoboza','ukukhanya okukhulu','motreën'),
(302,'pula e matla haholo', 'ukuqina okukhulu','kuvuza','swaar intensiteit motreën'),	
(310,'pula e matla haholo', 'imvula enamandla kakhulu','bunzima obunzima','ligintensiteit motreën reën'),	 
(311,'pula ea pula', 'imvula enamandla','imvula enamandla kakhulu','motreën reën'),
(312,'pula e matla haholo', 'ukuqina okukhulu kwemvula','imvula emvula','swaar intensiteit motreën reën'),	 
(313,'pula ea lipula le ho robala', 'ukuvula imvula nokushayela','imvula enamandla kakhulu','stort reën en drup'),	
(314,'pula e nang le lipula tse matla le ho robala', 'imvula yesondlo esindayo kanye ne-drizzle','ukuhambisa imvula kunye ne-drizzle','swaar stort reën en drup'),	
(321,'ho phatloha ka metsi', 'ukushayela okugeza','imvula enkulu yokuhambisa isitya kunye ne-drizzle','stort motreën'),	
(500,'pula e khanyang', 'imvula elula','ukuhambisa isitya','ligte reën'),	
(501,'pula e itekanetseng', 'imvula elinganiselayo','imvula elula','ligte reën'),	
(502,'pula e matla haholo', 'imvula enamandla kakhulu','imvula emodareyitha','swaar intensiteit reën'),	
(503,'pula e matla haholo', 'imvula enkulu kakhulu','imvula enzima','baie swaar reën'),	
(504,'pula e feteletseng', 'imvula enkulu','imvula enkulu','uiterste reën'),	
(511,'pula e matla', 'imvula ebandayo','imvula enkulu','baie swaar reën'),	
(520,'pula e khanyang ea lipula', 'ukukhanya kwemvula yokushisa okukhulu','imvula ebandayo','yskoue reën'),	 
(521,'pula ea pula', 'imvula yokugeza','ukukhanya kwemvula emvula','ligintensiteit stort reën'),
(522,'pula e matla haholo ea lipula', 'isisindo esinamandla sokushisa','imvula yokuhambisa','stort reën'),	 
(531,'pula ea lipula tsa metsi', 'imvula yokudonsa imvula','imvula enkulu yemvula','swaar intensiteit reën'),	 
(600,'lehloa le khanyang', 'iqhwa elikhanyayo','imvula yokunambisa imvula','verskeurde stort reën'),
	 
(601,'lehloa', 'iqhwa','iqhwa elikhanyayo','lig sneeu'),	
(602,'lehloa le boima', 'iqhwa elinzima','Ikhephu','sneeu'),	 
(611,'holo', 'isichotho se-sleet','ikhephu elikhulu','baie sneeu'),	
(612,'holo ea metsi', 'i-sleet shower','kulala','ysreën'),	
(615,'pula e khanyang le lehloa', 'imvula ekhanyayo neqhwa','Ishafa','stort reën'),	 
(616,'pula le lehloa', 'imvula neqhwa','imvula ekhanyayo nekhephu','ligte reën en sneeu'),	 
(620,'lehloa le nang le pula e khanyang', 'ukushisa okukhanyayo iqhwa','imvula nekhephu','reën en sneeu'),	 
(621,'pula ea lehloa', 'ukushayela iqhwa','ikhefu elikhanyayo','lig stort sneeu'),	 
(622,'lehloa le leholo', 'isithwathwa esinzima seqhwa','isanti iqhwa','stort sneeu'),	 
(701,'moholi', 'iphutha','ikhefu elibi kakhulu','swaar stort sneeu'),

	
(711,'mosi', 'ubhema','impazamo','mis'),	
(721,'mohaho', 'haze','ukutshaya','rook'),	
(731,'lehlabathe, lipula tsa lerōle', 'isihlabathi, uthuli','haze','waas'),	
(741,'moholi', 'inkungu','isanti','sand, stof wervelingen'),
(751,'lehlabathe', 'isihlabathi','uthuli','mis'),	
(761,'lerōle', 'uthuli','Inkungu','mis'),	
(762,'molora oa seretse se chesang', 'umlotha ontaba-mlilo','Isanti','sand'),	
(771,'sefefo', 'isiphepho','siqhwithi','storm'),	
(781,'sefefo sa leholimo', 'isiqhwaga','umlotha womlilo','vulkaniese as'),	
(800,'leholimo le hlakileng', 'isibhakabhaka esibonakalayo','Esibhakabhakeni','skone hemel ruim'),		
(801,'maru a seng makae feela', 'amafu ambalwa','amafu ambalwa','skone hemel ruim'),
		
(802,'ho phatloha maru', 'amafu ahlakazekile','amafu ahlakazekile','paar wolke'),		
(803,'ho phatloha maru', 'amafu aphukile','amafu aphukile','gebroke wolke'),	
(804,'maru a maholo', 'amafu','Amafu','bewolkte wolke');