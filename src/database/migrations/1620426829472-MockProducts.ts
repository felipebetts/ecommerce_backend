import {MigrationInterface, QueryRunner} from "typeorm";

export class MockProducts1620426829472 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        
        insert into products (name, price, description, id) values ('Apricots - Dried', 388.39, 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '25d9657d-2930-4404-87dc-e1d72d624f73');
insert into products (name, price, description, id) values ('Soup - Campbells Pasta Fagioli', 17.76, 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '2c936830-359b-4c20-a5f0-2ad8523c4caa');
insert into products (name, price, description, id) values ('Chips Potato Swt Chilli Sour', 475.56, 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', '19ccc1c0-179c-4be1-9752-587745cde6fd');
insert into products (name, price, description, id) values ('Beef - Top Butt', 10.41, 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 'fae54df8-f960-4d32-b2f7-8af14727ef46');
insert into products (name, price, description, id) values ('Kellogs Special K Cereal', 393.9, 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '2f381e16-2d5a-44b6-88cd-6f909b27435e');
insert into products (name, price, description, id) values ('Tea - Darjeeling, Azzura', 499.75, 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 'c1e8f3cd-3881-4583-8b8a-013a8e38e6ad');
insert into products (name, price, description, id) values ('Icecream - Dibs', 21.84, 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 'a58fbeb1-4fb6-4433-849b-fdd914a32538');
insert into products (name, price, description, id) values ('Chambord Royal', 333.69, 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 'c9b3e0b5-5166-407e-bec1-ec4b38695be6');
insert into products (name, price, description, id) values ('Bread - Bagels, Plain', 168.34, 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '8c2c9f26-4cec-49d4-9b16-b5c161cc6098');
insert into products (name, price, description, id) values ('Swordfish Loin Portions', 306.82, 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 'dc156e4b-96a5-4bf9-a6a9-4d5cbfc2ad3f');
insert into products (name, price, description, id) values ('Compound - Strawberry', 484.89, 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', '8d74f9f4-6d25-4b7f-9557-d8ea93fe177d');
insert into products (name, price, description, id) values ('Wine - White, Gewurtzraminer', 456.17, 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'd465d68e-d4c0-403b-93e2-052e4e9521fe');
insert into products (name, price, description, id) values ('Water - Evian 355 Ml', 77.24, 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', 'ee9ae7cc-bc07-4c7b-b30a-cd07358b172b');
insert into products (name, price, description, id) values ('Irish Cream - Butterscotch', 247.07, 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '8124a792-ef5d-4411-9395-0260ffb0abbc');
insert into products (name, price, description, id) values ('Mousse - Passion Fruit', 406.94, 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 'e7a9beae-2bbe-4581-ab04-68d60a02c559');
insert into products (name, price, description, id) values ('Mikes Hard Lemonade', 364.3, 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 'ddb162ad-361d-4809-b1a3-d67e516eef17');
insert into products (name, price, description, id) values ('Green Tea Refresher', 357.11, 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'd57b73fc-48ed-4109-9150-471096c93502');
insert into products (name, price, description, id) values ('Beer - Mill St Organic', 336.45, 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '1cd37973-6ced-4cb3-8bab-82b20ba537e2');
insert into products (name, price, description, id) values ('Mussels - Cultivated', 409.73, 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'e5a2f538-127a-41c9-a647-9575f60686d5');
insert into products (name, price, description, id) values ('Beer - Creemore', 353.46, 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', '85c5b0d5-f41b-48c4-867f-ac218b4bab71');
insert into products (name, price, description, id) values ('Juice - Apple Cider', 128.01, 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 'f09aa16e-7992-41c8-a8c4-b922f2aa5268');
insert into products (name, price, description, id) values ('Nut - Peanut, Roasted', 80.64, 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '49e047b3-17b5-405e-835d-4d0184808152');
insert into products (name, price, description, id) values ('Bread - Roll, Whole Wheat', 255.1, 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', '7b382262-ed3b-4e69-95b6-92a11c5a87bf');
insert into products (name, price, description, id) values ('Arctic Char - Fillets', 442.73, 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 'c3f3d6db-fcb4-409c-91eb-1ab891f6ed4b');
insert into products (name, price, description, id) values ('Ostrich - Prime Cut', 92.59, 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '2880327b-fe3b-4a0d-8bf1-3d0deb35e9ee');
insert into products (name, price, description, id) values ('Molasses - Fancy', 477.15, 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '35ee2f49-e049-46ce-8301-206d97259884');
insert into products (name, price, description, id) values ('Cocoa Butter', 210.81, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '562cde00-dbdf-45ea-9f1e-f56b84c16387');
insert into products (name, price, description, id) values ('Campari', 280.76, 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '144cff12-4254-49da-98f3-ed6fecef5bd1');
insert into products (name, price, description, id) values ('Beets - Candy Cane, Organic', 94.64, 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '1f7440ef-d9fd-415e-ac33-b459d3047fa2');
insert into products (name, price, description, id) values ('Lamb - Whole, Fresh', 464.02, 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 'c869203c-c0fd-4830-a4ba-9cd42e13f9b2');
insert into products (name, price, description, id) values ('Ecolab Crystal Fusion', 29.86, 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '45e2b36f-b4f9-4136-a659-9b0e59d40b65');
insert into products (name, price, description, id) values ('Chocolate - Unsweetened', 133.6, 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '9e6d9153-1fba-42ed-8886-b1a3324628cc');
insert into products (name, price, description, id) values ('Vinegar - White Wine', 326.27, 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 'ba313d08-1487-4890-a55e-fadcd70f07a9');
insert into products (name, price, description, id) values ('Peas - Frozen', 353.8, 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', '1dd474d9-9c27-46bf-9054-a59f30192df9');
insert into products (name, price, description, id) values ('Bread - Pumpernickle, Rounds', 335.58, 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '0d975bf9-34c1-484e-b284-54f8ee1a91a3');
insert into products (name, price, description, id) values ('Wine - Charddonnay Errazuriz', 93.17, 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '2e059d75-cdee-46f1-b646-4a801fd53a8b');
insert into products (name, price, description, id) values ('Nut - Chestnuts, Whole', 273.78, 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '802aabad-9c16-4628-8e76-86994d0c8848');
insert into products (name, price, description, id) values ('Peach - Fresh', 295.68, 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '547d5fdf-e7ac-477e-9066-d547c0208ca9');
insert into products (name, price, description, id) values ('Tart - Butter Plain Squares', 74.81, 'Fusce consequat. Nulla nisl. Nunc nisl.', '84a81860-1ef4-450f-a9f6-15dcef05355d');
insert into products (name, price, description, id) values ('Veal - Sweetbread', 461.25, 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '9d50ea07-d549-4ef0-b745-45a702a17a0d');
insert into products (name, price, description, id) values ('Momiji Oroshi Chili Sauce', 233.66, 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 'c8f6bd0b-48be-4389-b4b5-60741c6f5818');
insert into products (name, price, description, id) values ('Seedlings - Buckwheat, Organic', 143.09, 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', '5d5222c5-870a-45f3-b584-c53594c625f3');
insert into products (name, price, description, id) values ('Cookie Double Choco', 212.51, 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 'b2a8cb7c-3629-457c-af9f-0b1284875de9');
insert into products (name, price, description, id) values ('Soup Campbells', 244.18, 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '5abdd5ee-cf2a-4f8f-a4b1-de41cb8d8414');
insert into products (name, price, description, id) values ('Lettuce - Boston Bib', 136.08, 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 'f726e941-97ea-49e6-bc12-3c9fb1bc9e59');
insert into products (name, price, description, id) values ('Shichimi Togarashi Peppeers', 437.65, 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 'a69bfad8-0c15-4ef4-b368-0e2ca379a844');
insert into products (name, price, description, id) values ('Pepper - Pablano', 148.21, 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 'c1404391-40b6-4a2d-a629-b57f1f07b13c');
insert into products (name, price, description, id) values ('Wine - Maipo Valle Cabernet', 147.0, 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 'cebbc234-dcac-488c-9f91-3f4448bbce2d');
insert into products (name, price, description, id) values ('Soda Water - Club Soda, 355 Ml', 266.06, 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '96914852-c5ea-445f-99d5-26c98f2ac896');
insert into products (name, price, description, id) values ('Bread - Raisin', 212.74, 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 'ee21e282-c409-42d4-a656-72c8849092c6');
insert into products (name, price, description, id) values ('Tomatoes - Vine Ripe, Yellow', 329.82, 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '421f74c2-d6a5-490b-8941-2d47ec776715');
insert into products (name, price, description, id) values ('Wine - White, Colubia Cresh', 57.94, 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 'c857f54e-55b5-473f-9789-6aec93a0aebf');
insert into products (name, price, description, id) values ('Lamb - Leg, Bone In', 384.9, 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 'b58d9057-dee0-4ccf-b0a6-4d6cb46960f7');
insert into products (name, price, description, id) values ('Fond - Neutral', 192.3, 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'b798f0cf-d846-4b7b-911e-432856b15261');
insert into products (name, price, description, id) values ('Oil - Pumpkinseed', 135.97, 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '7b927fc2-3879-46da-8002-17d2b78e6254');
insert into products (name, price, description, id) values ('Pepperoni Slices', 146.37, 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 'adf7bb82-1f72-44e2-a0cb-0e898351dda5');
insert into products (name, price, description, id) values ('Cheese - Cheddar, Mild', 295.42, 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', 'ddb1c33f-a1d6-417a-9487-4d966d4e6420');
insert into products (name, price, description, id) values ('Chicken - Thigh, Bone In', 253.71, 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '4b5e1f77-33bd-4ff5-bc7d-3fbd707014d5');
insert into products (name, price, description, id) values ('Cookies - Englishbay Chochip', 36.18, 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '99e8a0f7-2be8-4e1a-abde-d3992da167d1');
insert into products (name, price, description, id) values ('Red Cod Fillets - 225g', 144.28, 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 'e4033057-5c9e-49e1-b604-4388abe581c0');
insert into products (name, price, description, id) values ('Pastry - Butterscotch Baked', 416.73, 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '75a14bcd-020f-4498-9ad2-a28d0cd365a6');
insert into products (name, price, description, id) values ('Chick Peas - Dried', 450.54, 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '97572eeb-a6bf-40fe-a5a9-ddee58bd7a27');
insert into products (name, price, description, id) values ('Wine - Taylors Reserve', 161.51, 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 'e2ab0db9-cd1f-4689-ac12-b482cb886609');
insert into products (name, price, description, id) values ('Wine - Two Oceans Cabernet', 381.18, 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '19678dca-9c30-44bc-b384-b3a50ded7b9b');
insert into products (name, price, description, id) values ('Brocolinni - Gaylan, Chinese', 81.03, 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 'a908015f-c252-46b3-99af-87eb0e33c4c8');
insert into products (name, price, description, id) values ('Sour Puss - Tangerine', 190.13, 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 'dc242894-16f4-46d2-b16a-de3eb4a6be67');
insert into products (name, price, description, id) values ('Tea - Earl Grey', 207.27, 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '9e5c3e60-657f-4ae9-af01-dc2725f1a2fc');
insert into products (name, price, description, id) values ('Wine - Marlbourough Sauv Blanc', 399.45, 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 'd904493d-be6c-432d-994e-add1d6d299a3');
insert into products (name, price, description, id) values ('Ham - Procutinni', 336.36, 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 'a53c9660-4faf-4f99-b8ff-26868c4f309b');
insert into products (name, price, description, id) values ('Trout - Rainbow, Fresh', 419.86, 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '7ed28f83-d0a8-4449-8728-d17d1901a915');
insert into products (name, price, description, id) values ('Pasta - Canelloni, Single Serve', 479.95, 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 'ec50cc5b-6774-44dc-b8ac-b4f418973348');
insert into products (name, price, description, id) values ('Tart Shells - Sweet, 3', 125.34, 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 'd12e508f-68bf-440e-996d-72e6b7b8b0bf');
insert into products (name, price, description, id) values ('Pineapple - Golden', 357.68, 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 'e1cd9698-8d4c-4eee-a509-75fa096d11e0');
insert into products (name, price, description, id) values ('Squid - Breaded', 77.6, 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 'b0aeb2b3-e509-4df7-8ea3-bb44259e0d70');
insert into products (name, price, description, id) values ('Hipnotiq Liquor', 14.94, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', '3adf5d03-0706-49b7-8c38-eb2feeb3ef42');
insert into products (name, price, description, id) values ('Beer - Mill St Organic', 407.13, 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 'c68c238e-cb18-4e87-a1ec-2070232bd7f2');
insert into products (name, price, description, id) values ('Fish - Atlantic Salmon, Cold', 330.67, 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '564665ac-ce16-477d-8530-4847a1411332');
insert into products (name, price, description, id) values ('Veal - Nuckle', 449.71, 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '31846909-1762-4109-b171-d620e49918b8');
insert into products (name, price, description, id) values ('Wild Boar - Tenderloin', 50.06, 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 'c64f55fe-73cf-4f4d-aa80-487b46e64303');
insert into products (name, price, description, id) values ('Chocolate - Chips Compound', 8.86, 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 'd54fd839-7a8e-4e84-937b-7392e4c8a180');
insert into products (name, price, description, id) values ('Pepsi, 355 Ml', 363.39, 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '92530029-0947-4ee6-a0e5-f7652ea0c533');
insert into products (name, price, description, id) values ('Vegetable - Base', 324.6, 'Fusce consequat. Nulla nisl. Nunc nisl.', '54ec1db6-f2e0-4103-b33f-9a5d8c4536b5');
insert into products (name, price, description, id) values ('Garlic - Primerba, Paste', 197.27, 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 'ec626bb3-8cc6-4952-ac76-28b6c1068137');
insert into products (name, price, description, id) values ('Dried Peach', 343.97, 'Fusce consequat. Nulla nisl. Nunc nisl.', '509349a3-b003-4189-8bde-d4aa89a28dc7');
insert into products (name, price, description, id) values ('Mousse - Mango', 499.48, 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 'f228e037-2b59-4c88-be58-40a568ebf858');
insert into products (name, price, description, id) values ('Muffin Mix - Chocolate Chip', 3.55, 'Fusce consequat. Nulla nisl. Nunc nisl.', 'c50887ed-f763-4ebf-8cd9-221af100f12d');
insert into products (name, price, description, id) values ('True - Vue Containers', 306.97, 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '3d711a77-f397-4edf-8e2e-3f3454d1b2a8');
insert into products (name, price, description, id) values ('Wine - Savigny - Les - Beaune', 172.1, 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '89cc05d1-76c3-42e5-becf-b22209d51b12');
insert into products (name, price, description, id) values ('Wine - Rioja Campo Viejo', 422.81, 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '8c9d201b-0aaf-4d47-8df0-cea15c549759');
insert into products (name, price, description, id) values ('Paper Cocktail Umberlla 80 - 180', 132.43, 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', '6d932ab0-ca88-43fe-9228-1d7724d05a8b');
insert into products (name, price, description, id) values ('Wine - Chateauneuf Du Pape', 415.19, 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 'd4022c28-fa0c-4745-a1ea-cc7ebbc42325');
insert into products (name, price, description, id) values ('Longos - Greek Salad', 65.28, 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 'a3ceffd7-7fc8-42eb-a453-39c7a5302df1');
insert into products (name, price, description, id) values ('Quail - Jumbo Boneless', 374.98, 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '1432fdf4-7409-4976-a8e4-aa17eb0819ea');
insert into products (name, price, description, id) values ('Wine - Lou Black Shiraz', 334.44, 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '3c450c8e-a683-4d1f-8835-3e93613c5787');
insert into products (name, price, description, id) values ('Tuna - Loin', 459.29, 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', 'e3e58ece-e97c-43ee-8b5c-ebf6d6685fd8');
insert into products (name, price, description, id) values ('Bread - Crusty Italian Poly', 77.47, 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', '39ae0f14-2612-4619-a24d-6f96bb82870d');
insert into products (name, price, description, id) values ('Flounder - Fresh', 36.9, 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '3c3d19bc-a064-40e5-9a68-cf17757a7069');
insert into products (name, price, description, id) values ('Eggwhite Frozen', 286.9, 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 'bf860f19-e17d-400b-94fe-84428241fa2b');
insert into products (name, price, description, id) values ('Beef - Shank', 433.42, 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '6e892649-e74d-4b34-912e-f1393de67aed');
insert into products (name, price, description, id) values ('Bag - Regular Kraft 20 Lb', 164.79, 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 'a3d2f116-c031-4aeb-bb1c-653206a9ceff');

        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
