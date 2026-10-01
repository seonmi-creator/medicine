const medicines = [
  {name:'타이레놀',ingredient:'성분명 · 아세트아미노펜',aliases:['타이레놀','아세트아미노펜','acetaminophen','tylenol'],action:'통증을 일시적으로 완화하고 열을 낮추는 데 사용돼요.',effects:['과량 복용 시 심각한 간 손상이 생길 수 있어요.','드물게 심한 피부 반응이나 알레르기 반응이 나타날 수 있어요.'],note:'다른 제품에 아세트아미노펜이 들어 있는지 확인해 성분이 중복되지 않도록 제품 라벨을 살펴보세요.',source:'https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1622f694-4d63-4c56-8737-fae31f0ecfb7'},
  {name:'이부프로펜',ingredient:'성분명 · 이부프로펜',aliases:['이부프로펜','애드빌','advil','ibuprofen'],action:'통증과 염증을 완화하고 열을 낮추는 데 사용되는 비스테로이드성 소염진통제(NSAID)예요.',effects:['위장 출혈이 발생할 수 있어요.','아스피린 등에 민감한 사람은 심한 알레르기 반응이나 쌕쌕거림이 나타날 수 있어요.'],note:'위장 출혈과 심혈관계 위험을 포함한 경고가 있어요. 위험은 건강 상태와 사용에 따라 달라질 수 있어 제품 라벨을 확인하세요.',source:'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8d518a08-486a-4d11-b042-27fc1e6060c9'},
  {name:'세티리진',ingredient:'성분명 · 세티리진염산염',aliases:['세티리진','세티리진염산염','지르텍','zyrtec','cetirizine'],action:'항히스타민 성분으로, 알레르기 비염 등으로 인한 재채기·콧물·눈 가려움 같은 증상을 일시적으로 완화해요.',effects:['졸음이 나타날 수 있어요.'],note:'졸음이 올 수 있으므로 운전이나 기계 조작 전에는 제품 설명서의 주의사항을 확인하세요.',source:'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=dc613bd5-70fd-1d9b-e053-2995a90a41cd'},
  {name:'로라타딘',ingredient:'성분명 · 로라타딘',aliases:['로라타딘','클라리틴','claritin','loratadine'],action:'항히스타민 성분으로, 알레르기로 인한 재채기·콧물·눈 가려움 같은 증상을 일시적으로 완화해요.',effects:['권장량보다 많이 복용하면 졸음이 생길 수 있어요.','알레르기 반응이 나타날 수 있어요.'],note:'간이나 신장 질환이 있다면 사용 전 의료 전문가와 상담하라는 제품 라벨의 안내를 확인하세요.',source:'https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=60162446-4fa1-4ee3-ae20-19fadc2491ab'},
  {name:'나프록센',ingredient:'성분명 · 나프록센나트륨',aliases:['나프록센','나프록센나트륨','낙센','탁센','aleve','naproxen','naproxen sodium'],action:'통증을 완화하고 열을 낮추는 데 쓰이는 비스테로이드성 소염진통제(NSAID)예요.',effects:['위장 출혈이 발생할 수 있어요.','심장마비·뇌졸중 위험이 높아질 수 있다는 NSAID 경고가 있어요.'],note:'위장·심혈관계 경고가 있는 성분이에요. 병력이나 다른 약에 따라 위험이 달라질 수 있으므로 라벨을 확인하세요.',source:'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d9c63e1f-c2ad-434b-8a21-7fff21b7477b'},
  {name:'아스피린',ingredient:'성분명 · 아스피린(아세틸살리실산)',aliases:['아스피린','아세틸살리실산','바이엘아스피린','bayer aspirin','aspirin'],action:'일부 제품 라벨에서 통증·발열을 일시적으로 완화하는 성분으로 안내돼요.',effects:['위장 출혈이 발생할 수 있어요.','심한 알레르기 반응이 나타날 수 있어요.'],note:'어린이·청소년의 바이러스성 질환과 관련한 별도 경고가 있어요. 제품별 용도와 경고를 확인하세요.',source:'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ea4cf2d5-477c-4c3f-b50c-f695a9b38be8'},
  {name:'펙소페나딘',ingredient:'성분명 · 펙소페나딘염산염',aliases:['펙소페나딘','펙소페나딘염산염','알레그라','allegra','fexofenadine'],action:'항히스타민 성분으로 알레르기 비염 증상과 두드러기 관련 가려움을 완화하는 데 사용돼요.',effects:['두통이나 메스꺼움이 나타날 수 있어요.','일부 사람에게 졸음이나 어지러움이 생길 수 있어요.'],note:'제품 라벨마다 사용 대상과 안내가 다를 수 있어요. 사용 전 해당 제품 설명서를 확인하세요.',source:'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9738127d-7308-454c-94c8-3229d507370f'},
  {name:'디펜히드라민',ingredient:'성분명 · 디펜히드라민염산염',aliases:['디펜히드라민','디펜히드라민염산염','베나드릴','benadryl','diphenhydramine'],action:'항히스타민 성분으로 알레르기 증상이나 감기와 관련한 콧물·재채기를 일시적으로 완화해요.',effects:['뚜렷한 졸음이 생길 수 있어요.','어린이에게는 반대로 흥분이 나타날 수 있어요.'],note:'술이나 진정제와 함께하면 졸음이 심해질 수 있다는 라벨 경고가 있어요.',source:'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?audience=consumer&setid=76724432-ff3c-404f-ba1f-5af68e3ab8c4'},
  {name:'클로르페니라민',ingredient:'성분명 · 클로르페니라민말레산염',aliases:['클로르페니라민','클로르페니라민말레산염','페니라민','chlorpheniramine'],action:'항히스타민 성분으로 알레르기성 재채기·콧물·눈 가려움 같은 증상을 일시적으로 완화해요.',effects:['졸음이 생길 수 있어요.','술이나 진정제와 함께하면 졸음이 심해질 수 있어요.'],note:'녹내장, 배뇨 곤란, 호흡기 질환이 있다면 제품 라벨의 사용 전 상담 안내를 확인하세요.',source:'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a350d56f-385d-48dc-b3ec-7eb392473d2d'},
  {name:'파모티딘',ingredient:'성분명 · 파모티딘',aliases:['파모티딘','가스터','pepcid','famotidine'],action:'위산 분비를 줄이는 H₂ 차단제로, 위산 역류와 관련한 속쓰림을 완화하는 데 사용돼요.',effects:['두통·어지러움·변비·설사 등이 보고돼요.'],note:'신장 질환이 있거나 처방약을 복용 중이라면 제품 라벨에 적힌 상담 안내를 확인하세요.',source:'https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f2b911c7-ce24-4d3d-8fb6-c34980191f40'},
  {name:'오메프라졸',ingredient:'성분명 · 오메프라졸',aliases:['오메프라졸','프릴로섹','prilosec','omeprazole'],action:'위산 생성을 줄이는 프로톤펌프억제제(PPI)로, 잦은 속쓰림의 단기 치료에 사용돼요.',effects:['두통이나 복통이 나타날 수 있어요.','메스꺼움·설사 같은 소화기 증상이 생길 수 있어요.'],note:'즉시 속쓰림을 가라앉히는 약이 아닐 수 있고, 제품 라벨에는 다른 처방약과의 상담 안내가 있어요.',source:'https://dailymed.nlm.nih.gov/dailymed/getFile.cfm?setid=a4e92bd2-8f75-4acc-9b75-df8332bd4cc4&type=pdf'},
  {name:'탄산칼슘',ingredient:'성분명 · 탄산칼슘',aliases:['탄산칼슘','텀스','tums','calcium carbonate'],action:'위산을 중화하는 제산 성분으로, 속쓰림·위산 과다로 인한 소화 불편을 완화해요.',effects:['변비나 더부룩함이 생길 수 있어요.'],note:'신장 결석·신장 질환이 있거나 처방약을 복용 중이라면 제품 라벨의 상담 안내를 확인하세요.',source:'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=98041570-993e-4ab4-8565-1f8c0b5e433a'},
  {name:'비스무트 서브살리실레이트',ingredient:'성분명 · 비스무트 서브살리실레이트',aliases:['비스무트서브살리실레이트','비스무트차살리실산염','peptobismol','pepto bismol','bismuth subsalicylate'],action:'일부 제품 라벨에서 설사와 과식으로 인한 속 불편을 완화하는 성분으로 안내돼요.',effects:['혀나 변 색이 일시적으로 어두워질 수 있어요.','이명이나 청력 변화가 나타나면 사용을 멈추고 상담하라는 라벨 안내가 있어요.'],note:'살리실산염 성분이에요. 아스피린 알레르기나 출혈 관련 병력 등 라벨의 경고를 확인하세요.',source:'https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d4af6694-910c-da17-e053-2995a90a8454'},
  {name:'로페라마이드',ingredient:'성분명 · 로페라마이드염산염',aliases:['로페라마이드','로페라미드','이모디움','imodium','loperamide'],action:'장 운동을 늦춰 설사 증상을 조절하는 데 사용되는 지사 성분이에요.',effects:['변비나 복부 불편이 생길 수 있어요.','권장량보다 많이 복용하면 심각한 심장 문제가 생길 수 있다는 라벨 경고가 있어요.'],note:'혈변·검은 변, 발열, 간 질환, 부정맥 병력이 있는 경우 등 제품 라벨의 주의사항을 확인하세요.',source:'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f3ea8779-252e-4038-ae41-500e15c54825'},
  {name:'덱스트로메토르판',ingredient:'성분명 · 덱스트로메토르판브롬화수소산염',aliases:['덱스트로메토르판','덱스트로메토르판브롬화수소산염','dextromethorphan'],action:'감기 등으로 인한 가벼운 목·기관지 자극성 기침을 일시적으로 억제하는 성분이에요.',effects:['어지러움·졸림·메스꺼움이 생길 수 있어요.'],note:'일부 항우울제 등 MAOI 계열 약과 함께 복용하지 말라는 라벨 경고가 있어요. 복용 중인 약이 있다면 확인하세요.',source:'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?audience=consumer&setid=204a7fc4-142d-45fd-8a77-0612857132be'},
  {name:'구아이페네신',ingredient:'성분명 · 구아이페네신',aliases:['구아이페네신','뮤시넥스','mucinex','guaifenesin'],action:'가래를 묽게 하고 기관지 분비물을 배출하기 쉽게 해 기침을 돕는 거담 성분이에요.',effects:['일반의약품 라벨에서 흔한 부작용을 구체적으로 열거하지 않은 제품이 있어요.','성분에 과민 반응이 생기면 사용을 중단하고 상담하세요.'],note:'기침이 오래 지속되거나 열·발진·지속적인 두통과 함께 나타나면 진료가 필요할 수 있다는 라벨 안내를 확인하세요.',source:'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=888b6a2e-6631-4585-a7fe-eb122eb51b23'},
  {name:'슈도에페드린',ingredient:'성분명 · 슈도에페드린염산염',aliases:['슈도에페드린','수도에페드린','슈도에페드린염산염','수다페드','sudafed','pseudoephedrine'],action:'코 점막의 부기를 줄여 감기나 알레르기와 관련한 코막힘을 일시적으로 완화하는 비충혈제거 성분이에요.',effects:['신경과민·어지러움·불면이 나타날 수 있어요.'],note:'심장 질환·고혈압·갑상선 질환·당뇨가 있거나 특정 처방약을 복용 중이면 라벨의 상담 경고를 확인하세요.',source:'https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658b0fe8-d564-4f79-bbb2-939c518651b7'},
  {name:'옥시메타졸린',ingredient:'성분명 · 옥시메타졸린염산염(비강 스프레이)',aliases:['옥시메타졸린','옥시메타졸린염산염','아프린','afrin','oxymetazoline'],action:'코 점막의 부기를 줄여 코막힘과 부비동 압박감을 일시적으로 완화하는 비충혈제거 성분이에요.',effects:['코 안의 화끈거림·따가움·재채기·콧물 증가가 나타날 수 있어요.','자주 또는 오래 사용하면 코막힘이 다시 생기거나 심해질 수 있어요.'],note:'일부 제품 라벨은 3일 넘게 사용하지 말라고 안내해요. 실제 제품 설명서의 사용 기간을 확인하세요.',source:'https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d997f264-1b4a-4cca-a282-bd9645d55bfd'},
  {name:'플루티카손 비강 스프레이',ingredient:'성분명 · 플루티카손프로피오네이트',aliases:['플루티카손','플루티카손프로피오네이트','플루티카손비강스프레이','플로나제','flonase','fluticasone'],action:'비강 스테로이드 성분으로 알레르기 비염 증상을 완화하는 데 사용돼요.',effects:['코피·두통·목 자극이 생길 수 있어요.','코 안의 화끈거림이나 자극이 나타날 수 있어요.'],note:'비강 제품 라벨에서 발췌한 정보예요. 다른 제형이나 성분이 섞인 제품은 설명서가 다를 수 있어요.',source:'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=71a2609f-c4b9-49b0-8185-83c20c22e1d6'},
  {name:'하이드로코르티손 크림',ingredient:'성분명 · 하이드로코르티손 1% 외용제',aliases:['하이드로코르티손','히드로코르티손','하이드로코르티손크림','hydrocortisone'],action:'약한 국소 스테로이드 성분으로 습진·벌레 물림 등 가벼운 피부 자극과 발진의 가려움을 일시적으로 완화해요.',effects:['바른 부위에 자극이나 민감 반응이 생길 수 있어요.','제품 라벨은 상태가 악화되거나 증상이 7일 넘게 지속되면 중단하고 상담하도록 안내해요.'],note:'외용 크림 라벨 기준이에요. 눈 주위·기저귀 발진 등 사용 제한과 사용 기간을 제품 설명서에서 확인하세요.',source:'https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=0f4ede34-7e70-789e-e063-6394a90a72a4'},
  {name:'클로트리마졸 크림',ingredient:'성분명 · 클로트리마졸 1% 외용제',aliases:['클로트리마졸','클로트리마졸크림','카네스텐','로트리민','lotrimin','clotrimazole'],action:'피부 곰팡이 감염에 사용하는 항진균 성분으로, 무좀·완선·백선 증상에 쓰여요.',effects:['사용 부위에 자극이 생길 수 있어요.','자극이 나타나거나 심해지면 사용을 중단하고 상담하라는 라벨 안내가 있어요.'],note:'피부용 크림 라벨 기준이며 두피·손발톱 등에는 효과가 없을 수 있어요. 제품 설명서의 적용 부위를 확인하세요.',source:'https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=c0f58a0d-a304-41f9-bbdf-c2e488230cf0'},
  {name:'테르비나핀 크림',ingredient:'성분명 · 테르비나핀염산염 1% 외용제',aliases:['테르비나핀','테르비나핀염산염','테르비나핀크림','라미실','lamisil','terbinafine'],action:'무좀·완선·백선 등 피부 곰팡이 감염에 사용하는 항진균 성분이에요.',effects:['바른 부위에 자극이 생길 수 있어요.','자극이 심해지면 사용을 중단하고 상담하라는 라벨 안내가 있어요.'],note:'크림 제품 라벨 기준이에요. 손발톱이나 두피 감염에는 해당 제품이 적합하지 않을 수 있어요.',source:'https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=58293d62-089d-49ab-b691-dfd705ac9a9c'},
  {name:'디클로페낙 겔',ingredient:'성분명 · 디클로페낙나트륨 1% 외용제',aliases:['디클로페낙','디클로페낙나트륨','디클로페낙겔','볼타렌','voltaren','diclofenac'],action:'일부 외용 겔 제품은 관절염과 관련한 관절 통증 완화를 위해 사용돼요.',effects:['바른 부위에 피부염·가려움·붉어짐·건조함이 생길 수 있어요.','NSAID 성분이므로 위장 출혈과 심혈관계 위험 경고도 확인해야 해요.'],note:'외용 겔 제품 라벨 기준이에요. 먹는 디클로페낙과 용도·위험 정보가 같지 않으므로 제형을 확인하세요.',source:'https://dailymed.nlm.nih.gov/dailymed/getFile.cfm?setid=fce9b3eb-ae79-a090-e053-6294a90ad20e'},
  {name:'폴리에틸렌글리콜 3350',ingredient:'성분명 · 폴리에틸렌글리콜 3350(PEG 3350)',aliases:['폴리에틸렌글리콜','폴리에틸렌글리콜3350','peg3350','miralax','미라락스','polyethylene glycol'],action:'장 안의 수분을 늘리는 삼투성 완하제로, 가끔 생기는 변비를 완화하는 데 사용돼요.',effects:['묽고 물기가 많은 변이나 배변 횟수 증가가 생길 수 있어요.','복부 팽만·경련·설사가 나타날 수 있어요.'],note:'신장 질환이 있거나 복통·구토가 있는 경우 등 제품 라벨의 사용 전 상담 안내를 확인하세요.',source:'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=77b9060f-c9ab-4047-b1f1-063956678453'},
  {name:'비사코딜',ingredient:'성분명 · 비사코딜',aliases:['비사코딜','둘코락스','dulcolax','bisacodyl'],action:'장 운동을 자극해 가끔 생기는 변비를 일시적으로 완화하는 자극성 완하제예요.',effects:['복부 불편감·어지러움·복부 경련이 생길 수 있어요.'],note:'일주일 넘게 완하제를 사용하지 말라는 라벨 안내가 있어요. 복통·구토가 있으면 사용 전 상담하세요.',source:'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=da925c7f-9642-49ff-8d09-d15b48d50400'},
  {name:'도쿠세이트 나트륨',ingredient:'성분명 · 도쿠세이트나트륨',aliases:['도쿠세이트','도큐세이트','도쿠세이트나트륨','콜라스','colace','docusate'],action:'변에 수분이 섞이도록 돕는 대변 연화 성분으로, 가끔 생기는 변비 완화에 사용돼요.',effects:['복통·메스꺼움·설사 등 불편이 나타날 수 있어요.'],note:'복통·구토가 있거나 변 습관에 갑작스러운 변화가 있으면 제품 라벨의 상담 안내를 확인하세요.',source:'https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cc8d1556-f108-4166-837c-48f81152877e'},
  {name:'센나',ingredient:'성분명 · 센노사이드',aliases:['센나','세나','센노사이드','senna','sennosides'],action:'장 운동을 자극하는 식물 유래 완하 성분으로, 가끔 생기는 변비 완화에 사용돼요.',effects:['복부 경련이나 불편감이 생길 수 있어요.','설사가 나타날 수 있어요.'],note:'지속적인 변비나 복통이 있으면 사용 전 상담하고 제품 라벨의 기간 제한을 확인하세요.',source:'https://dailymed.nlm.nih.gov/dailymed/getFile.cfm?setid=9248a907-a8bd-47d5-98a2-48534d6023d4&type=pdf'},
  {name:'시메티콘',ingredient:'성분명 · 시메티콘',aliases:['시메티콘','가스엑스','gas-x','simethicone'],action:'위장 내 가스 거품을 줄여 가스와 관련한 압박감·복부 팽만·더부룩함을 완화하는 데 사용돼요.',effects:['확인한 일반의약품 라벨에는 구체적인 대표 부작용이 별도로 열거되지 않았어요.'],note:'이 문구는 확인한 제품 라벨의 기재 범위예요. 개인에게 부작용이 없다는 뜻은 아니므로 이상 반응이 있으면 상담하세요.',source:'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0df348bf-5a07-4f36-ae70-ca2961a9ce7e'},
  {name:'벤조일퍼옥사이드',ingredient:'성분명 · 벤조일퍼옥사이드 외용제',aliases:['벤조일퍼옥사이드','과산화벤조일','벤조일퍼옥사이드겔','benzoyl peroxide'],action:'여드름 치료에 사용하는 외용 성분이에요.',effects:['피부 건조·붉어짐·화끈거림·가려움·각질이 생길 수 있어요.','머리카락이나 염색 직물의 색이 빠질 수 있어요.'],note:'피부 자극이 심해지면 사용을 중단하라는 라벨 안내가 있어요. 농도와 제형에 따른 사용법을 확인하세요.',source:'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=950edb4e-fbba-41e3-9ec5-973806e555e7'},
  {name:'미녹시딜 외용액',ingredient:'성분명 · 미녹시딜 5% 외용액 라벨 기준',aliases:['미녹시딜','미녹시딜외용액','로게인','rogaine','minoxidil'],action:'일부 5% 외용액 라벨은 남성의 정수리 부위 모발 재성장을 돕는 제품으로 안내해요.',effects:['두피 가려움이나 자극·붉어짐이 생길 수 있어요.','가슴 통증·빠른 심박·어지러움·손발 부종 등이 있으면 사용을 멈추고 진료하라는 경고가 있어요.'],note:'연령·성별·탈모 형태와 제형에 따라 사용 조건이 다를 수 있어요. 연결된 5% 제품 라벨의 적용 범위를 확인하세요.',source:'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=acc5ad74-4558-4be9-aab4-94ad9ddad6b2'}
];

const form = document.getElementById('searchForm');
const input = document.getElementById('medicineSearch');
const emptyState = document.getElementById('emptyState');
const resultCard = document.getElementById('resultCard');
const notFound = document.getElementById('notFound');

function normalize(value) {
  return value.toLocaleLowerCase('ko-KR').replace(/[\s·()[\]-]/g, '');
}

function hideAllResults() {
  emptyState.classList.add('hidden');
  resultCard.classList.add('hidden');
  notFound.classList.add('hidden');
}

function showMedicine(medicine) {
  hideAllResults();
  document.getElementById('resultName').textContent = medicine.name;
  document.getElementById('ingredientLine').textContent = medicine.ingredient;
  document.getElementById('actionText').textContent = medicine.action;
  document.getElementById('resultNote').textContent = medicine.note;
  const list = document.getElementById('sideEffects');
  list.replaceChildren(...medicine.effects.map((effect) => {
    const item = document.createElement('li');
    item.textContent = effect;
    return item;
  }));
  const link = document.getElementById('sourceLink');
  link.href = medicine.source;
  resultCard.classList.remove('hidden');
}

function search(query) {
  const cleanQuery = query.trim();
  if (!cleanQuery) {
    hideAllResults();
    emptyState.classList.remove('hidden');
    input.focus();
    return;
  }
  const normalizedQuery = normalize(cleanQuery);
  const match = medicines.find((medicine) => medicine.aliases.some((alias) => normalize(alias) === normalizedQuery));
  if (match) {
    showMedicine(match);
  } else {
    hideAllResults();
    document.getElementById('notFoundMessage').textContent = `“${cleanQuery}”에 해당하는 정보는 아직 준비되지 않았어요.`;
    notFound.classList.remove('hidden');
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  search(input.value);
});

document.querySelectorAll('[data-query]').forEach((button) => {
  button.addEventListener('click', () => {
    input.value = button.dataset.query;
    search(input.value);
  });
});

