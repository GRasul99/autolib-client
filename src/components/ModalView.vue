<template>
  <transition name="modal">
    <!--    <div class="modal-mask">-->
    <!--      <div class="modal-wrapper">-->
    <!--        <div class="modal-container">-->
    <!--          <div class="modal-header">-->
    <!--            <button class="modal-default-button" @click="$emit('close')">-->
    <!--              <i class="fa fa-close"></i>-->
    <!--            </button>-->
    <!--          </div>-->
    <!--          <div class="modal-body">-->
    <!--            <img src="http://njnj.ru/pix/voc/book.gif" alt="Book" />-->
    <!--            <div>-->
    <!--              <h3>{{ book.title }}asmdklasdmaklsdmaskl;dmsakl;mdaksl lasmdkasldmasklmdaskld asdmaksldmaskl;dmaskl</h3>-->
    <!--              <h3>{{ book.author }}</h3>-->
    <!--              <h3>{{ book.rating }}</h3>-->
    <!--              <div class="buttons">-->
    <!--                <button>Download</button>-->
    <!--                <button>Order</button>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
    <div class="modal-mask">
      <div class="modal-wrapper -shadow">
        <button class="modal-close" @click="$emit('close')">
          <i class="fa fa-close"></i>
        </button>
        <div class="modal-media">
          <img
            class="modal-media__img"
            src="http://njnj.ru/pix/voc/book.gif"
            alt="Book"
          />
          <div class="modal-media-content">
            <h3>
              <strong>Название книги:</strong>
              {{ book.title }}asdasldas; a;s'dlsa;'dlsa;'dl ;'asldas;ld;
            </h3>
            <p><strong>Автор книги:</strong> {{ book.author }}</p>
            <p><strong>Рейтинг: </strong> {{ book.rating }}</p>
            <div class="modal-media-buttons">
              <BaseButton>Download</BaseButton>
              <BaseButton>Order</BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import BaseButton from '@/components/BaseButton'
export default {
  name: 'ModalView',
  components: { BaseButton },
  props: ['book', 'show']
}
</script>

<style scoped lang="scss">
.modal {
  &-close {
    width: 1em;
    text-align: center;
    background: transparent;
    border: none;
    margin: 0.5em 1em 0.5em auto;
    cursor: pointer;
    .fa {
      font-size: 1.5em;
    }
  }
  &-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-items: center;
    transition: opacity 0.3s ease;
  }
  &-wrapper {
    display: grid;
    background: azure;
    margin: 0 auto;
  }
  &-media {
    //display: grid;
    //grid-template-columns: repeat(2, minmax(210px, 1fr));
    //grid-gap: 1em;
    display: flex;
    justify-content: space-between;
    margin: 0.5em;
    border: 1px solid #1fe70e;
    &__img {
      width: 200px;
      height: 250px;
      border: 1px solid #1fe70e;
    }
    &-content {
      text-align: left;
      border: 1px solid #1fe70e;
    }
    &-buttons {
      margin-top: auto;
    }
  }
}
//.modal-mask {
//  position: fixed;
//  z-index: 9998;
//  top: 0;
//  left: 0;
//  width: 100%;
//  height: 100%;
//  background-color: rgba(0, 0, 0, 0.4);
//  display: table;
//  transition: opacity 0.3s ease;
//}
//
//.modal-wrapper {
//  display: table-cell;
//  vertical-align: middle;
//}
//
//.modal-container {
//  width: 420px;
//  margin: 0 auto;
//  padding: 20px 30px;
//  background-color: #fff;
//  border-radius: 2px;
//  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
//  transition: all 0.3s ease;
//  font-family: Helvetica, Arial, sans-serif;
//}
//
//.modal-body {
//  margin-top: 2em;
//  display: grid;
//  grid-template-columns: repeat(2, minmax(210px, 1fr));
//  //display: flex;
//  justify-content: center;
//  text-align: left;
//  img {
//    width: 150px;
//    height: 200px;
//  }
//  .buttons {
//    display: grid;
//    grid-gap: 10px;
//    grid-template-columns: repeat(2, minmax(50px, 1fr));
//  }
//}
//
//.modal-default-button {
//  float: right;
//}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
