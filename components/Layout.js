import React, { Component } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CalendarEl from './CalendarEl';
// import link  from 'next/link';
// import styles from '../styles/globals.module.css'

class Layout extends Component {
    render(){
      return(
        <div className={styles.container}>
        <Head>
          <title>React VVV</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div class="container">

      <main className={styles.main}>
        <h1>VVV - wiki</h1>
    
        <div class="main">
            <div class="grid">
                <div class="card"> 
                    <h3>인공 지능 용어</h3>
                    <p>AI는 온라인에서 고객과 의사 소통하거나 체스를 두는 것과 같이 사람의 입력이 필요했던 복잡한 작업을 수행하는 애플리케이션의 포괄 용어가 되었습니다. 이 용어는 종종 머신 러닝 및 딥 러닝을 포함하는 하위 필드와 같은 의미로 사용됩니다. 그러나 차이점이 있습니다. 예를 들어, 머신 러닝은 사용하는 데이터를 기반으로 성능을 학습하거나 개선하는 시스템을 구축하는 데 중점을 둡니다. 모든 머신 러닝이 AI이지만 모든 AI가 머신 러닝은 아닙니다.</p>
                </div>
                <div class="card"> 
                    <h3>Alan Turing 이란? &rarr;</h3>
                    <p>Alan Turing 의 저서 Computing Machinery and Intelligence 에서 기계가 지능적이라고 간주할 수 있는 조건을 언급했다. 만일 지성있는 사람이 관찰하여 기계가 진짜 인간처럼 보이게 하는데 성공한다면 확실히 그것은 지능적이라고 간주해야 한다고 주장했다. 이 test는 대부분의 사람들을 만족시키지만 어떤 철학자들은 납득하지 않는다. 관찰하는 사람과 기계는 상호교류한다. 이때 텔레타이프를 사용하는데 기계는 아직 사람의 외모와 목소리를 완전히 흉내내지 못하기 때문이다. 이때 관찰하는 사람에게 자기가 인간이라고 설득함으로써 기계는 관찰자를 바보로 만들려고 시도할것이다.</p>
                </div>
                <div class="card"> 
                    <h3>고객서비스 &rarr;</h3>
                    <p>고객에 대한 정보를 샘플링하는 것만으로는 더 이상 충분하지 않습니다. 고객의 실제 행동에 대한 중요한 인사이트를 얻어야 합니다. 이를 위해서는 머신 러닝과 딥 러닝 알고리즘을 구동할 수 있는 엄청난 양의 데이터가 필요합니다. IDC가 IBM 빅데이터 인프라가 AI의 성공적인 구현과 편견 없는 진정한 실시간 인사이트를 제공하는 핵심이라고 판단하는 이유를 알아봅니다..</p>
                </div>
                <div class="card"> 
                    <h3>엔터프라이즈의 AI &rarr;</h3>
                    <p>AI 기술은 한때 인력이 필요했던 프로세스 또는 작업을 자동화하여 기업의 성능과 생산성을 향상시키고 있습니다. AI는 또한 인간이 할 수 없는 규모의 데이터를 이해할 수 있습니다. 이러한 기능은 상당한 비즈니스 이점을 가져다 줄 수 있습니다. 예를 들면 넷플릭스는 머신 러닝을 사용하여 개인화 수준을 제공하며, 이 회사는 2017년에 고객 기반을 25% 이상 늘릴 수 있었습니다.</p>
                </div>
                <div class="card"> 
                    <h3>AI 운영의 이점과 과제 &rarr;</h3>
                    <p>AI의 가치를 입증하는 수많은 성공 사례가 있습니다. 머신 러닝 및 인지 상호 작용을 기존 비즈니스 프로세스 및 애플리케이션에 추가하는 조직은 사용자 경험을 크게 개선하고 생산성을 높일 수 있습니다.

                        그러나 몇 가지 걸림돌이 있습니다. 몇 가지 이유로 AI를 대규모로 배포한 기업은 거의 없습니다. 예를 들어 클라우드 컴퓨팅을 사용하지 않는 경우 AI 프로젝트는 종종 계산 비용이 많이 듭니다. 또한 구축이 복잡하고 전문 지식에 대한 수요는 많지만 공급이 부족합니다. AI를 언제 어디서 통합해야할지, 그리고 언제 제3자에게 의지해야 하는지 아는 것은 이러한 어려움을 최소화하는 데 도움이 됩니다.</p>
                </div>
                <div class="card"> 
                    <h3>About &rarr;</h3>
                    <p>Find VVV.</p>
                </div>
            </div>
        </div>
        </main>
      </div>
      <CalendarEl />
        <footer className={styles.footer}>
            Powered by{' '}  VVV
        </footer>
      </div>
      )
    }
}

export default Layout;