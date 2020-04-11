<template>
  <div>
  <a-card hoverable layout="vertical"  >
        <a-descriptions hoverable title="商品详情页">

          <a-descriptions-item  >
            <img
            alt="example"
            src="https://img11.360buyimg.com/n1/jfs/t3775/310/2091876548/584547/de84e466/58412b6eNd437b4ac.jpg"
            width="200px"
            heght="200px"
            />
          </a-descriptions-item>

          <a-descriptions-item label="商品">1810000000</a-descriptions-item>
          <a-descriptions-item label="分类">Hangzhou, Zhejiang</a-descriptions-item>
          <a-descriptions-item label="商品评分">empty</a-descriptions-item>

        </a-descriptions>

  </a-card>
    <br>
  <a-card title="猜你喜欢">
    <a href="#" slot="extra">查看更多</a>

    <a-card-grid style="width:18%; text-align:center; margin-right: 2% "  >
      <a-card title="投资理财从入门到精通" :bordered="false"  >
        <img
          alt="example"
          src="https://img11.360buyimg.com/n1/jfs/t3775/310/2091876548/584547/de84e466/58412b6eNd437b4ac.jpg"
          slot="cover"
          width="60px"
          heght="60px"
        />
        <span>
                    <a-rate :tooltips="desc" v-model="value" />
                    <span class="ant-rate-text">{{desc[value - 1]}}</span>
                  </span>
      </a-card>
    </a-card-grid>


    <a-card-grid style="width:18%;text-align:center; margin: 0% 1%"  >
      <a-card title="投资理财从入门到精通" :bordered="false"  >
        <img
          alt="example"
          src="https://img11.360buyimg.com/n1/jfs/t3775/310/2091876548/584547/de84e466/58412b6eNd437b4ac.jpg"
          slot="cover"
        />
        <span>
                    <a-rate :tooltips="desc" v-model="value" />
                    <span class="ant-rate-text">{{desc[value - 1]}}</span>
                  </span>
      </a-card>
    </a-card-grid>

    <a-card-grid style="width:18%;text-align:center; margin: 0 1%"  >
      <a-card title="投资理财从入门到精通" :bordered="false"  >
        <img
          alt="example"
          src="https://img11.360buyimg.com/n1/jfs/t3775/310/2091876548/584547/de84e466/58412b6eNd437b4ac.jpg"
          slot="cover"
        />
        <span>
                    <a-rate :tooltips="desc" v-model="value" />
                    <span class="ant-rate-text">{{desc[value - 1]}}</span>
              </span>
      </a-card>
    </a-card-grid>

    <a-card-grid style="width:18%;text-align:center ;margin: 0 1%"  >
      <a-card title="投资理财从入门到精通" :bordered="false"  >
        <img
          alt="example"
          src="https://img11.360buyimg.com/n1/jfs/t3775/310/2091876548/584547/de84e466/58412b6eNd437b4ac.jpg"
          slot="cover"
        />
        <span>
                    <a-rate :tooltips="desc" v-model="value" />
                    <span class="ant-rate-text">{{desc[value - 1]}}</span>
                  </span>
      </a-card>
    </a-card-grid>

    <a-card-grid style="width:18%;text-align:center; margin-left:  2%"  >
      <a-card title="投资理财从入门到精通" :bordered="false"  >
        <img
          alt="example"
          src="https://img11.360buyimg.com/n1/jfs/t3775/310/2091876548/584547/de84e466/58412b6eNd437b4ac.jpg"
          slot="cover"
        />
        <span>
                    <a-rate :tooltips="desc" v-model="value" />
                    <span class="ant-rate-text">{{desc[value - 1]}}</span>
                  </span>
      </a-card>
    </a-card-grid>


  </a-card>
  </div>
</template>


<script>
    export default {
        name: "ShopDetail"
      ,data(){
      return {
        value: 3,
        desc: ['terrible', 'bad', 'normal', 'good', 'wonderful'],
      }
    }
    }
</script>

<style scoped>

</style>
