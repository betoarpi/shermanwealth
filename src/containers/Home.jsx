/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { MainHero } from '../components/Heros/index';
import Persona from '../components/Persona/index';
import OurCommitment from '../components/OurCommitment';
import Service from '../components/Service';
import FeaturedIn from '../components/FeaturedIn';
import { BtnLinkPrimary, BtnLinkCTA } from '../components/Buttons/index';
import JourneyImg from '../assets/img/homepage-hero.jpg';

const Home = () => {
  const personas = [
    {
      'id': 1,
      'title': 'Carey Keaysell',
      'description': 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
      'url': 'https://yahoo.com/pede/ac/diam.html?ut=sapien&massa=iaculis&volutpat=congue&convallis=vivamus&morbi=metus&odio=arcu&odio=adipiscing&elementum=molestie&eu=hendrerit&interdum=at&eu=vulputate&tincidunt=vitae&in=nisl&leo=aenean&maecenas=lectus&pulvinar=pellentesque&lobortis=eget&est=nunc&phasellus=donec&sit=quis&amet=orci&erat=eget&nulla=orci&tempus=vehicula&vivamus=condimentum&in=curabitur&felis=in&eu=libero&sapien=ut&cursus=massa&vestibulum=volutpat&proin=convallis&eu=morbi&mi=odio&nulla=odio&ac=elementum&enim=eu&in=interdum&tempor=eu&turpis=tincidunt&nec=in&euismod=leo&scelerisque=maecenas&quam=pulvinar&turpis=lobortis&adipiscing=est&lorem=phasellus&vitae=sit&mattis=amet&nibh=erat&ligula=nulla&nec=tempus&sem=vivamus&duis=in&aliquam=felis&convallis=eu&nunc=sapien&proin=cursus&at=vestibulum&turpis=proin&a=eu&pede=mi&posuere=nulla&nonummy=ac&integer=enim&non=in&velit=tempor&donec=turpis&diam=nec&neque=euismod&vestibulum=scelerisque&eget=quam&vulputate=turpis&ut=adipiscing&ultrices=lorem&vel=vitae&augue=mattis&vestibulum=nibh&ante=ligula&ipsum=nec&primis=sem&in=duis&faucibus=aliquam&orci=convallis&luctus=nunc',
      'imgSrc': 'http://dummyimage.com/297x363.png/cc0000/ffffff',
    },
    {
      'id': 2,
      'title': 'Hephzibah Papaminas',
      'description': 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
      'url': 'http://ebay.co.uk/cubilia/curae/duis/faucibus/accumsan/odio.aspx?blandit=vulputate&ultrices=ut&enim=ultrices&lorem=vel&ipsum=augue&dolor=vestibulum&sit=ante&amet=ipsum&consectetuer=primis&adipiscing=in&elit=faucibus&proin=orci&interdum=luctus&mauris=et&non=ultrices&ligula=posuere&pellentesque=cubilia&ultrices=curae&phasellus=donec&id=pharetra&sapien=magna&in=vestibulum&sapien=aliquet&iaculis=ultrices&congue=erat&vivamus=tortor&metus=sollicitudin&arcu=mi&adipiscing=sit&molestie=amet&hendrerit=lobortis&at=sapien&vulputate=sapien&vitae=non&nisl=mi&aenean=integer&lectus=ac&pellentesque=neque&eget=duis&nunc=bibendum&donec=morbi&quis=non&orci=quam',
      'imgSrc': 'http://dummyimage.com/395x338.png/5fa2dd/ffffff',
    },
    {
      'id': 3,
      'title': 'Jody Hansel',
      'description': 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      'url': 'http://redcross.org/metus/aenean.html?nulla=primis&tellus=in&in=faucibus&sagittis=orci&dui=luctus&vel=et&nisl=ultrices&duis=posuere&ac=cubilia&nibh=curae&fusce=mauris&lacus=viverra&purus=diam&aliquet=vitae&at=quam&feugiat=suspendisse&non=potenti&pretium=nullam&quis=porttitor&lectus=lacus&suspendisse=at&potenti=turpis&in=donec&eleifend=posuere&quam=metus&a=vitae&odio=ipsum&in=aliquam&hac=non&habitasse=mauris&platea=morbi&dictumst=non&maecenas=lectus&ut=aliquam&massa=sit&quis=amet&augue=diam&luctus=in&tincidunt=magna&nulla=bibendum&mollis=imperdiet&molestie=nullam&lorem=orci&quisque=pede&ut=venenatis&erat=non&curabitur=sodales&gravida=sed&nisi=tincidunt&at=eu&nibh=felis',
      'imgSrc': 'http://dummyimage.com/468x430.jpg/cc0000/ffffff',
    },
    {
      'id': 4,
      'title': 'Erwin Brusle',
      'description': 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
      'url': 'https://google.ca/rhoncus/aliquam.png?purus=massa&aliquet=quis&at=augue&feugiat=luctus&non=tincidunt&pretium=nulla&quis=mollis&lectus=molestie&suspendisse=lorem&potenti=quisque&in=ut&eleifend=erat&quam=curabitur&a=gravida&odio=nisi&in=at&hac=nibh&habitasse=in&platea=hac&dictumst=habitasse&maecenas=platea&ut=dictumst&massa=aliquam&quis=augue&augue=quam&luctus=sollicitudin&tincidunt=vitae&nulla=consectetuer&mollis=eget&molestie=rutrum&lorem=at&quisque=lorem&ut=integer&erat=tincidunt&curabitur=ante&gravida=vel&nisi=ipsum&at=praesent&nibh=blandit&in=lacinia&hac=erat&habitasse=vestibulum&platea=sed&dictumst=magna&aliquam=at&augue=nunc&quam=commodo&sollicitudin=placerat&vitae=praesent&consectetuer=blandit&eget=nam&rutrum=nulla&at=integer&lorem=pede&integer=justo&tincidunt=lacinia&ante=eget&vel=tincidunt&ipsum=eget&praesent=tempus&blandit=vel&lacinia=pede&erat=morbi&vestibulum=porttitor&sed=lorem&magna=id&at=ligula&nunc=suspendisse&commodo=ornare&placerat=consequat&praesent=lectus&blandit=in&nam=est&nulla=risus&integer=auctor&pede=sed&justo=tristique&lacinia=in&eget=tempus',
      'imgSrc': 'http://dummyimage.com/376x278.png/ff4444/ffffff',
    },
    {
      'id': 5,
      'title': 'Pattin Meir',
      'description': 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
      'url': 'http://wiley.com/molestie/nibh.jsp?sit=donec&amet=ut&consectetuer=dolor&adipiscing=morbi&elit=vel&proin=lectus&interdum=in&mauris=quam&non=fringilla&ligula=rhoncus&pellentesque=mauris&ultrices=enim&phasellus=leo&id=rhoncus&sapien=sed&in=vestibulum&sapien=sit&iaculis=amet&congue=cursus&vivamus=id&metus=turpis&arcu=integer&adipiscing=aliquet&molestie=massa&hendrerit=id&at=lobortis&vulputate=convallis&vitae=tortor&nisl=risus&aenean=dapibus&lectus=augue&pellentesque=vel&eget=accumsan&nunc=tellus&donec=nisi&quis=eu&orci=orci&eget=mauris&orci=lacinia&vehicula=sapien&condimentum=quis&curabitur=libero&in=nullam&libero=sit&ut=amet&massa=turpis&volutpat=elementum&convallis=ligula&morbi=vehicula&odio=consequat&odio=morbi&elementum=a&eu=ipsum&interdum=integer&eu=a&tincidunt=nibh&in=in',
      'imgSrc': 'http://dummyimage.com/378x495.png/ff4444/ffffff',
    },
    {
      'id': 6,
      'title': 'Mirilla Boon',
      'description': 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
      'url': 'https://acquirethisname.com/turpis/a.jsp?curae=rhoncus&mauris=sed&viverra=vestibulum&diam=sit&vitae=amet&quam=cursus&suspendisse=id&potenti=turpis&nullam=integer&porttitor=aliquet&lacus=massa&at=id&turpis=lobortis&donec=convallis&posuere=tortor&metus=risus&vitae=dapibus&ipsum=augue&aliquam=vel&non=accumsan&mauris=tellus&morbi=nisi&non=eu&lectus=orci&aliquam=mauris&sit=lacinia&amet=sapien&diam=quis&in=libero&magna=nullam&bibendum=sit&imperdiet=amet&nullam=turpis&orci=elementum&pede=ligula&venenatis=vehicula&non=consequat&sodales=morbi&sed=a&tincidunt=ipsum&eu=integer&felis=a&fusce=nibh&posuere=in&felis=quis&sed=justo&lacus=maecenas&morbi=rhoncus&sem=aliquam&mauris=lacus&laoreet=morbi&ut=quis&rhoncus=tortor&aliquet=id&pulvinar=nulla&sed=ultrices&nisl=aliquet&nunc=maecenas&rhoncus=leo&dui=odio&vel=condimentum&sem=id&sed=luctus&sagittis=nec&nam=molestie&congue=sed&risus=justo&semper=pellentesque&porta=viverra&volutpat=pede&quam=ac&pede=diam&lobortis=cras&ligula=pellentesque&sit=volutpat&amet=dui&eleifend=maecenas&pede=tristique&libero=est&quis=et&orci=tempus&nullam=semper&molestie=est',
      'imgSrc': 'http://dummyimage.com/450x488.bmp/ff4444/ffffff',
    }];
  const services = [
    {
      'id': 1,
      'title': 'Service 1',
      'description': 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
      'url': 'https://yahoo.com/pede/ac/diam.html?ut=sapien&massa=iaculis&volutpat=congue&convallis=vivamus&morbi=metus&odio=arcu&odio=adipiscing&elementum=molestie&eu=hendrerit&interdum=at&eu=vulputate&tincidunt=vitae&in=nisl&leo=aenean&maecenas=lectus&pulvinar=pellentesque&lobortis=eget&est=nunc&phasellus=donec&sit=quis&amet=orci&erat=eget&nulla=orci&tempus=vehicula&vivamus=condimentum&in=curabitur&felis=in&eu=libero&sapien=ut&cursus=massa&vestibulum=volutpat&proin=convallis&eu=morbi&mi=odio&nulla=odio&ac=elementum&enim=eu&in=interdum&tempor=eu&turpis=tincidunt&nec=in&euismod=leo&scelerisque=maecenas&quam=pulvinar&turpis=lobortis&adipiscing=est&lorem=phasellus&vitae=sit&mattis=amet&nibh=erat&ligula=nulla&nec=tempus&sem=vivamus&duis=in&aliquam=felis&convallis=eu&nunc=sapien&proin=cursus&at=vestibulum&turpis=proin&a=eu&pede=mi&posuere=nulla&nonummy=ac&integer=enim&non=in&velit=tempor&donec=turpis&diam=nec&neque=euismod&vestibulum=scelerisque&eget=quam&vulputate=turpis&ut=adipiscing&ultrices=lorem&vel=vitae&augue=mattis&vestibulum=nibh&ante=ligula&ipsum=nec&primis=sem&in=duis&faucibus=aliquam&orci=convallis&luctus=nunc',
    },
    {
      'id': 2,
      'title': 'Service 2',
      'description': 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
      'url': 'http://ebay.co.uk/cubilia/curae/duis/faucibus/accumsan/odio.aspx?blandit=vulputate&ultrices=ut&enim=ultrices&lorem=vel&ipsum=augue&dolor=vestibulum&sit=ante&amet=ipsum&consectetuer=primis&adipiscing=in&elit=faucibus&proin=orci&interdum=luctus&mauris=et&non=ultrices&ligula=posuere&pellentesque=cubilia&ultrices=curae&phasellus=donec&id=pharetra&sapien=magna&in=vestibulum&sapien=aliquet&iaculis=ultrices&congue=erat&vivamus=tortor&metus=sollicitudin&arcu=mi&adipiscing=sit&molestie=amet&hendrerit=lobortis&at=sapien&vulputate=sapien&vitae=non&nisl=mi&aenean=integer&lectus=ac&pellentesque=neque&eget=duis&nunc=bibendum&donec=morbi&quis=non&orci=quam',
    },
    {
      'id': 3,
      'title': 'Service 3',
      'description': 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      'url': 'http://redcross.org/metus/aenean.html?nulla=primis&tellus=in&in=faucibus&sagittis=orci&dui=luctus&vel=et&nisl=ultrices&duis=posuere&ac=cubilia&nibh=curae&fusce=mauris&lacus=viverra&purus=diam&aliquet=vitae&at=quam&feugiat=suspendisse&non=potenti&pretium=nullam&quis=porttitor&lectus=lacus&suspendisse=at&potenti=turpis&in=donec&eleifend=posuere&quam=metus&a=vitae&odio=ipsum&in=aliquam&hac=non&habitasse=mauris&platea=morbi&dictumst=non&maecenas=lectus&ut=aliquam&massa=sit&quis=amet&augue=diam&luctus=in&tincidunt=magna&nulla=bibendum&mollis=imperdiet&molestie=nullam&lorem=orci&quisque=pede&ut=venenatis&erat=non&curabitur=sodales&gravida=sed&nisi=tincidunt&at=eu&nibh=felis',
    },
    {
      'id': 4,
      'title': 'Service 4',
      'description': 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
      'url': 'https://google.ca/rhoncus/aliquam.png?purus=massa&aliquet=quis&at=augue&feugiat=luctus&non=tincidunt&pretium=nulla&quis=mollis&lectus=molestie&suspendisse=lorem&potenti=quisque&in=ut&eleifend=erat&quam=curabitur&a=gravida&odio=nisi&in=at&hac=nibh&habitasse=in&platea=hac&dictumst=habitasse&maecenas=platea&ut=dictumst&massa=aliquam&quis=augue&augue=quam&luctus=sollicitudin&tincidunt=vitae&nulla=consectetuer&mollis=eget&molestie=rutrum&lorem=at&quisque=lorem&ut=integer&erat=tincidunt&curabitur=ante&gravida=vel&nisi=ipsum&at=praesent&nibh=blandit&in=lacinia&hac=erat&habitasse=vestibulum&platea=sed&dictumst=magna&aliquam=at&augue=nunc&quam=commodo&sollicitudin=placerat&vitae=praesent&consectetuer=blandit&eget=nam&rutrum=nulla&at=integer&lorem=pede&integer=justo&tincidunt=lacinia&ante=eget&vel=tincidunt&ipsum=eget&praesent=tempus&blandit=vel&lacinia=pede&erat=morbi&vestibulum=porttitor&sed=lorem&magna=id&at=ligula&nunc=suspendisse&commodo=ornare&placerat=consequat&praesent=lectus&blandit=in&nam=est&nulla=risus&integer=auctor&pede=sed&justo=tristique&lacinia=in&eget=tempus',
    },
    {
      'id': 5,
      'title': 'Service 5',
      'description': 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
      'url': 'http://wiley.com/molestie/nibh.jsp?sit=donec&amet=ut&consectetuer=dolor&adipiscing=morbi&elit=vel&proin=lectus&interdum=in&mauris=quam&non=fringilla&ligula=rhoncus&pellentesque=mauris&ultrices=enim&phasellus=leo&id=rhoncus&sapien=sed&in=vestibulum&sapien=sit&iaculis=amet&congue=cursus&vivamus=id&metus=turpis&arcu=integer&adipiscing=aliquet&molestie=massa&hendrerit=id&at=lobortis&vulputate=convallis&vitae=tortor&nisl=risus&aenean=dapibus&lectus=augue&pellentesque=vel&eget=accumsan&nunc=tellus&donec=nisi&quis=eu&orci=orci&eget=mauris&orci=lacinia&vehicula=sapien&condimentum=quis&curabitur=libero&in=nullam&libero=sit&ut=amet&massa=turpis&volutpat=elementum&convallis=ligula&morbi=vehicula&odio=consequat&odio=morbi&elementum=a&eu=ipsum&interdum=integer&eu=a&tincidunt=nibh&in=in',
    },
    {
      'id': 6,
      'title': 'Service 6',
      'description': 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
      'url': 'https://acquirethisname.com/turpis/a.jsp?curae=rhoncus&mauris=sed&viverra=vestibulum&diam=sit&vitae=amet&quam=cursus&suspendisse=id&potenti=turpis&nullam=integer&porttitor=aliquet&lacus=massa&at=id&turpis=lobortis&donec=convallis&posuere=tortor&metus=risus&vitae=dapibus&ipsum=augue&aliquam=vel&non=accumsan&mauris=tellus&morbi=nisi&non=eu&lectus=orci&aliquam=mauris&sit=lacinia&amet=sapien&diam=quis&in=libero&magna=nullam&bibendum=sit&imperdiet=amet&nullam=turpis&orci=elementum&pede=ligula&venenatis=vehicula&non=consequat&sodales=morbi&sed=a&tincidunt=ipsum&eu=integer&felis=a&fusce=nibh&posuere=in&felis=quis&sed=justo&lacus=maecenas&morbi=rhoncus&sem=aliquam&mauris=lacus&laoreet=morbi&ut=quis&rhoncus=tortor&aliquet=id&pulvinar=nulla&sed=ultrices&nisl=aliquet&nunc=maecenas&rhoncus=leo&dui=odio&vel=condimentum&sem=id&sed=luctus&sagittis=nec&nam=molestie&congue=sed&risus=justo&semper=pellentesque&porta=viverra&volutpat=pede&quam=ac&pede=diam&lobortis=cras&ligula=pellentesque&sit=volutpat&amet=dui&eleifend=maecenas&pede=tristique&libero=est&quis=et&orci=tempus&nullam=semper&molestie=est',
    }];

  return (
    <>
      <MainHero
        key='main-hero__home'
        imgSrc={JourneyImg}
      >
        <span>Where are you in</span>
        <br />
        your journey?
        <FaChevronDown />
      </MainHero>
      <section className='persona__container'>
        {
          personas.map((persona) => <Persona key={persona.id} {...persona} />)
        }
      </section>
      <OurCommitment />
      <section className='services'>
        {
          services.map((service) => <Service key={service.id} {...service} />)
        }
        <BtnLinkCTA key='services__start-here' weblink='/'>
          Start Here
        </BtnLinkCTA>
      </section>
      <FeaturedIn />
      <div className='risk-tolerance'>
        <h3>What is your risk tolerance?</h3>
        <p>While the stock market’s dips and climbs can be thrilling and/or nerve-wracking, the key to successful investing is to establish a sound and steady investment strategy that’s aligned with your own personal risk tolerance.</p>
        <BtnLinkPrimary key='risk-number' weblink='/'>
          Find out your risk number
        </BtnLinkPrimary>
      </div>
    </>
  );
};

export default Home;
