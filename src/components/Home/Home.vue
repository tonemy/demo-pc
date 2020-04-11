<template>
    <div>
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <a-card title="实时推荐">
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

        <br>
        <a-card title="热门推荐">
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
        <br>

        <a-card title="好评商品" >
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

        <br>

      </div>
    </div>
</template>

<script>
    export default {
        name: "Home"
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
