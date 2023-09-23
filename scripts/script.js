  const squareBody = document.querySelector(".square-body")
  const blocks = squareBody.querySelectorAll(".block")

  squareBody.addEventListener("click", function (event) {
    const target = event.target

    if (target.parentElement.classList.contains("arrow")) {

      const block = target.closest(".block")
      const blockNumber = block.querySelector(".block-number")
      const currentBlockNumber = parseInt(blockNumber.textContent, 10)

      const arrowClick = target.parentElement.classList.contains("left")
        ? "left"
        : target.parentElement.classList.contains("right")
        ? "right"
        : target.parentElement.classList.contains("top")
        ? "top"
        : target.parentElement.classList.contains("bottom")
        ? "bottom"
        : null

      if (arrowClick) {
        //индекс текущего блока
        const currentIndex = Array.from(blocks).indexOf(block)

        //индекс соседнего блока в зависимости от направления
        let newIndex
        if (arrowClick === "left") {
          newIndex = currentIndex - 1

          if (currentIndex == 0) {
          return
          }
        } else if (arrowClick === "right") {
          newIndex = currentIndex + 1
          
          if (currentIndex >= blocks.length - 1) {
            return
          }
        } else if (arrowClick === "top" && currentIndex >= 5) {
          newIndex = currentIndex - 5
        } else if (arrowClick === "bottom" && currentIndex + 5 < blocks.length) {
          newIndex = currentIndex + 5
        }

        if (newIndex !== undefined) {
          const newBlock = blocks[newIndex]
          const newBlockNumber = newBlock.querySelector(".block-number")
          const newBlockNumberValue = parseInt(newBlockNumber.textContent, 10)

          // Меняем местами номера блоков
          blockNumber.textContent = newBlockNumberValue
          newBlockNumber.textContent = currentBlockNumber
        }
      }
    }
  })


  const resetButton = document.querySelector(".btn-reset")
  resetButton.addEventListener("click", function () {
    // Восстанавливаем исходное состояние блоков
    Array.from(blocks).forEach((block, index) => {
      const blockNumber = block.querySelector(".block-number")
      blockNumber.textContent = index + 1
    })
  })







