const ttlBody = `

@prefix crm: <https://cidoc-crm.org/html/cidoc_crm_v7.1.3.html#> .
@prefix counterdata: <http://example.org/counterdata/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

##................ Data Model ................ ##

## Data Intervention

<ColObject-BirdsEntry724> a counterdata:CollectionObject ;
	counterdata:HasType <PhyColObj-BirdsEntry724>;
	counterdata:HasType <DigiColObj-BirdsEntry724>;	
	counterdata:HasAttribute <Title-BirdsEntry724> ;
	counterdata:HasMaterialType <HasMaterialType-BirdsEntry724> ;
	counterdata:HasMaterialCondition <HasMaterialCondition-BirdsEntry724> ;
	counterdata:CollectedAt <CollectedAt-BirdsEntry724> ;
	counterdata:CollectedOn <CollectedOn-BirdsEntry724> ;
	counterdata:EngagedBy <Actor-BirdsEntry724> ;
	counterdata:Represents <ConceptualItem-BirdsEntry724> ;
	counterdata:HeldBy <Institution-BirdsEntry724> ;
	counterdata:IsSimilarTo <ColObjSimilar-BirdsEntry724> ;
	counterdata:Indicates <Power-BirdsEntry724> ;
	counterdata:IndicatesOccuringOf <Event-BirdsEntry724> .


<Title-BirdsEntry724> a crm:E35Title ;
	rdfs:label "Birds Entry 724: Feathers made up to fright the slaves. Wald. Barb. p" .

<HasMaterialType-BirdsEntry724> a counterdata:Material ;
	rdfs:label "Natural material, Manuscript entry" .

<HasMaterialCondition-BirdsEntry724> a counterdata:Material ;
	rdfs:label "The manuscripts have survived and are currently stored at the British Library. However, there is no institutional evidence of physical presence of the object collected by Sloane." .

<CollectedAt-BirdsEntry724> a counterdata:Place ;
	rdfs:label "Jamaica" .

<CollectedOn-BirdsEntry724> a counterdata:Time ;
rdfs:label "Unknown." .

<Actor-BirdsEntry724> a counterdata:Actor ;
counterdata:EngagesIn <DomAct-BirdsEntry724>;
counterdata:EngagesIn <ResAct-BirdsEntry724>;
rdfs:label "Sloane, Captain Thomas Walduck, Obeah men and their followers" .

<ConceptualItem-BirdsEntry724> a counterdata:ConceptualItem ;
rdfs:label "*Thesis excerpt on religious and spiritual significance of Obeah practices for the enslaved people in Jamaica and in the Caribbean overall*" .

<Institution-BirdsEntry724> a counterdata:Organisation ;
rdfs:label "British Library" .

<ColObjSimilar-BirdsEntry724> a counterdata:Item ;
rdfs:label "*Similar collection objects across both collections*" .

<Power-BirdsEntry724> a counterdata:Power ;
counterdata:HasType <Dom-BirdsEntry724>;
counterdata:HasType <Res-BirdsEntry724>;
rdfs:label "Material culture of resistance, Tools of defiance, Spiritual practices, Obeah, Indigenous knowledge systems" .

## method of acquisition colobj -> EngagedBy -> Actor -> Utilises

<Actor-BirdsEntry724> a counterdata:Actor ;
	counterdata:Utilises <Utilises-BirdsEntry724> .

<Utilises-BirdsEntry724> a counterdata:ConceptualItem ;
rdfs:label "Sent to Sir Hans Sloane by Captain Walduck from Barbados. Captain Walduck was a British seaman who was stationed in the 'West Indies' for 15 years during which he amassed natural and cultural material" .

<Event-BirdsEntry724> a counterdata:Event;
counterdata:Indicates <DomEvent-BirdsEntry724>;
counterdata:Indicates <ResEvent-BirdsEntry724>.

# Power domination resistance relationship

## Historical Power 

<Dom-BirdsEntry724> a counterdata:Domination;
rdfs:label "Transatlantic slavery, Colonial domination, Religious imposition, Subjection to dehumanisation" .

<DomAct-BirdsEntry724> a counterdata:Domination;
rdfs:label "Sloane, Thomas Walduck" .

<DomEvent-BirdsEntry724> a counterdata:Domination;
rdfs:label "Colonisation of Jamaica, Banning of Obeah practices" .

<ResAct-BirdsEntry724> a counterdata:Resistance;
rdfs:label "Obeah men and their followers" .

<Res-BirdsEntry724> a counterdata:Resistance;
rdfs:label "Religious practices for resistance, Instilling colonial anxiety in colonists" . 

<ResEvent-BirdsEntry724> a counterdata:Resistance;
rdfs:label "Obeah Uprising" .


## Access Information

<PhyColObj-BirdsEntry724> a counterdata:PhysicalCollectionObject;
	counterdata:HeldBy <PhyInstitution-BirdsEntry724>;
	counterdata:Holds <PhyAccessRights-BirdsEntry724>.

<PhyInstitution-BirdsEntry724> a counterdata:Organisation;
rdfs:label "British Library" .

<PhyAccessRights-BirdsEntry724> a counterdata:AccessRights;
rdfs:label "Manuscript can be made available upon request by filling an online form" .


<DigiColObj-BirdsEntry724> a counterdata:DigitalCollectionObject;
	counterdata:HeldBy <DigiInstitution-BirdsEntry724>;
	counterdata:Holds <DigiAccessRights-BirdsEntry724>;
	counterdata:Holds <DigiUsageRights-BirdsEntry724>.

<DigiInstitution-BirdsEntry724> a counterdata:Organisation;
rdfs:label "Sloane Lab Knowledge Base";
rdfs:label "British Library Digital Archives";
rdfs:label "Digitised Manuscripts";
rdfs:label "Illuminated Manuscripts".


<DigiAccessRights-BirdsEntry724> a counterdata:AccessRights;
rdfs:label "Available as digitised manuscript" ;
rdfs:label "Digitised object available via Library Research Repository, searchable through the identifier Sloane MS 3972 B. However, it is currently unavailable due to the British Library cyber attack in October 2023." ;
rdfs:label "Platform is offline most probably because of the British Library cyber attack in October 2023";
rdfs:label "Platform is offline most probably because of the British Library cyber attack in October 2023" .


<DigiUsageRights-BirdsEntry724> a counterdata:UsageRights;
rdfs:label "not clear from the platform";
rdfs:label "CC Public Domain Mark 1.0".




# sample



<http://example.com/event/6817497d> a crm:E22_Human-made_Object ;
	rdfs:label "" ;
	rdfs:subClassOf counterdata:Item ;
	crm:P4_has_time-span <http://example.com/time/5c5f16fc>	 ;
	crm:P12_occurred_in_the_presence_of <http://example.com/person/95cee8a7> , <http://example.com/object/23b1ddb2> ;
	crm:P7_took_place_at <http://example.com/place/96ce9dee> .

# IRIs have to be distinct

<http://example.com/object/23b1ddb2> a crm:E22_Human-made_Object ;
	rdfs:label "LaocoÃ¶n Group" ;
	crm:P2_has_type <http://example.com/type/copy/a7b49f6a> .

<http://example.com/type/copy/a7b49f6a> a crm:E55_Type ;
	rdfs:label "Copy" .

<http://example.com/person/95cee8a7> a crm:E21_Person ;
	rdfs:label "Johann-Joachim Winkelmann" .
	
<http://example.com/time/5c5f16fc> a crm:E52_Time-span ;
	rdfs:label "1755" .

<http://example.com/place/96ce9dee> a crm:E53_Place ;
	rdfs:label "Vatican, Rome" .

<http://example.com/event/creation/da3548b4> a crm:E65_Creation ;
	rdfs:label "Winkelmann writes history of the Art of Antiquity" ;
	crm:P14_carried_out_by <http://example.com/person/95cee8a7> ;
	crm:P94_has_created <http://example.com/information/2316e0b4> ;
	crm:P4_has_time-span <http://example.com/time/d55085b0>	 .
	
<http://example.com/time/d55085b0> a crm:E52_Time-span ;
	rdfs:label "1764" .

<http://example.com/information/2316e0b4> a crm:E73_Information_Object ;
		rdfs:label "History of the Art of Antiquity" ;
	crm:P67_refers_to <http://example.com/object/23b1ddb2> .

<http://example.com/event/production/29b60f4d> a crm:E12_Production ;
	rdfs:label "Roman commision copy of the LaocoÃ¶n Group" ;
	crm:P108_has_produced <http://example.com/object/23b1ddb2> ;
	crm:P12_occurred_in_the_presence_of <http://example.com/object/1da07e92> .

<http://example.com/object/1da07e92> a crm:E22_Human-made_Object ;
	rdfs:label "LaocoÃ¶n Group" ;
	crm:P2_has_type <http://example.com/type/hellenistic/93745ddf> .

<http://example.com/type/hellenistic/93745ddf> a crm:E55_Type ;
	rdfs:label "Hellenistic" .

<http://example.com/event/birth/46e90bf4> a crm:E67_Birth ;
	rdfs:label "Winkelmann's birth" ;
	crm:P98_brought_into_life <http://example.com/person/95cee8a7> ;
	crm:P96_by_mother <http://example.com/person/639e49e8> ;
	crm:P7_took_place_at <http://example.com/place/b1a8dd6b> ;
	crm:P4_has_time-span <http://example.com/time/572e3de3> .

<http://example.com/time/572e3de3> a crm:E52_Time-span ;
	rdfs:label "1717" .

<http://example.com/person/639e49e8> a crm:E21_Person ;
	rdfs:label "Anna-Maria Meyer" .

<http://example.com/place/b1a8dd6b> a crm:E53_Place ;
	rdfs:label "Stendal" .

<http://example.com/event/death/07f84a6f> a crm:E69_Death ;
	rdfs:label "Winkelmann's death" ;
	crm:P100_was_death_of <http://example.com/person/95cee8a7> ;
	crm:P7_took_place_at <http://example.com/place/a6b28b49> ;
	crm:P4_has_time-span <http://example.com/time/e949ad84> .

<http://example.com/place/a6b28b49> a crm:E53_Place ;
 	rdfs:label "Trieste" .

<http://example.com/time/e949ad84> a crm:E52_Time-span ;
 	rdfs:label "1768" .

`;

export default ttlBody;
