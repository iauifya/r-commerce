<script setup>
import { useCategoryStore } from '@/stores/category'
const categoryStore = useCategoryStore()
</script>

<template>
  <div class="home-category">
    <ul class="menu">
      <li v-for="item in categoryStore.category" :key="item.id">
        <router-link :to="`/category/${item.id}`">{{ item.name }}</router-link>
        <router-link v-for="i in item.children.slice(0, 2)" :key="i" to="/">{{ i.name }}</router-link>
        <div class="layer">
          <h4>分類推薦<small>根據您的購買或瀏覽紀錄推薦</small></h4>
          <ul>
            <li v-for="i in item.goods" :key="i.id">
              <router-link to="/">
                <img :src="i.picture" alt="">
                <div class="info">
                  <p class="name">{{ i.name }}</p>
                  <p class="desc">{{ i.desc }}</p>
                  <p class="price">{{ i.price }}</p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="less">
.home-category {
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 99;

  .menu {
    li {
      padding-left: 40px;
      height: 50px;
      line-height: 50px;

      &:hover,
      &.active {
        background-color: @xtxColor;
      }

      a {
        margin-right: 4px;
        color: #fff;

        &:first-child {
          font-size: 16px;
        }
      }
    }
  }
}

.layer {
  width: 990px;
  height: 500px;
  background: rgba(255, 255, 255, 0.8);
  position: absolute;
  left: 250px;
  top: 0;
  display: none;
  padding: 0 15px;

  h4 {
    font-size: 20px;
    font-weight: normal;
    line-height: 80px;

    small {
      font-size: 16px;
      color: #666;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      width: 310px;
      height: 120px;
      margin-right: 15px;
      margin-bottom: 15px;
      border: 1px solid #eee;
      border-radius: 4px;
      background: #fff;

      &:nth-child(3n) {
        margin-right: 0;
      }

      &.brand {
        height: 180px;

        a {
          align-items: flex-start;

          img {
            width: 120px;
            height: 160px;
          }

          .info {
            p {
              margin-top: 8px;
            }

            .place {
              color: #999;
            }
          }
        }
      }

      a {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        padding: 10px;

        &:hover {
          background: #e3f9f4;
        }

        img {
          width: 95px;
          height: 95px;
        }

        .info {
          padding-left: 10px;
          line-height: 24px;
          width: 190px;

          .name {
            font-size: 16px;
            color: #666;
          }

          .desc {
            color: #999;
          }

          .price {
            font-size: 22px;
            color: @priceColor;

            i {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}

&:hover {
  .layer {
    display: block;
  }
}</style>