import Head from 'next/head'
import Image from 'next/image'
import styles from './style.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { faRulerHorizontal } from '@fortawesome/free-solid-svg-icons';
import fronimage from '../images/download.png'
import React from 'react'

class Sns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [
        rento28[follower=follower,following=following,posts[
          id=id,
          titles['おすすめの焼肉屋は？'],
          coments[user[coments]]
        ]],
      ],
    }
  }
}


export default function Home() {
  return (
  <div className={styles.container}>
    <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"/>
      <title>大喜利sns</title>
    </Head>
    <header>
     <form>
     <input type="text" class="form-control" id="formGroupExampleInput" placeholder="大喜利のお題を投稿する"/>
      <button type="button" class="btn btn-info">投稿</button>
     </form>
    
    </header>
    <nav>
    <i class="bi bi-house-fill"></i>
    <i class="bi bi-search"></i>
    
    </nav>
    {/* <hr/> */}
    <main>
      <div className={styles.posts}>
        <div className={styles.postsHead}>
          <Image src={fronimage} class="rounded-pill" alt="..." width={60} height={30}/>
          <div className={styles.text}>
             <div className={styles.name}>rento28</div> <div className={styles.p}>おすすめの焼肉屋は？</div></div>
        </div>

        <div className={styles.postsBody}>
          <div className={styles.coments}>
            <Image src={fronimage} class="rounded-pill" alt="..." width={30} height={20}/>
           <div className={styles.bodytext}>焼き肉キング</div>  <i class="bi bi-heart"></i>
          </div>
        </div>
          <div>
            <form>
            <div class="form-group">
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="大喜利回答する"/>
            </div>
            </form>
          </div>
      </div>
    </main>
  </div>
  )
}
