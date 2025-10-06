// ==UserScript==
// @name         123云盘解锁
// @author       QingJ
// @namespace    https://github.com/QingJ01/123pan_unlock
// @version      1.2.0
// @description  专业的123云盘增强脚本 - 完美解锁会员功能、突破下载限制、去广告、支持自定义用户信息。整合秒传链接功能，支持生成和保存秒传文件，快速分享和保存文件。界面精美，功能强大，让你的123云盘体验更美好！
// @contributor  Baoqing、Chaofan、lipkiat - 123FastLink秒传功能核心贡献者
// @contributor  hmjz100 - 借鉴了部分适配代码
// @license      Apache Licence 2
// @icon         data:image/x-icon;base64,AAABAAEAQEAAAAEAIAAoQgAAFgAAACgAAABAAAAAgAAAAAEAIAAAAAAAAEAAAMMOAADDDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPt8WAD7fFgC+3xYB/t8WBf7fFhQ+3xYkPt8WMD7fFji+3xY9Px9Wfr8fVn7+3xY+/x9Wfv7fFj7/H1Z+/t8WPv8fVn7/H1Z+/x9Wfv8fVn7/H1Z+/x9Wfv7fVn7+31Z+/t9Wfv7fVn7/H1Z+/x9Wfv8fVn7+3xY+/x9Wfv7fFj7/H1Z+/x9Wfv8fVn7/H1Z+/x9Wfv8fVn7/H1Z+/x9Wfr7fFj1+3xY5Pt8WMP7fFiU+3xYVPt8WBn7fFgI+3xYAvt8WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+3xYAPt8WAD7fFgF+3xYJft8WIL7fFjV/H1Z8ft9Wff8fVn6+31Z/ft9Wf78fVn//H1Z//x9Wf/8fVn//H1Z//t9Wf/8fVn/+31Z//x9Wf/8fVn//H1Z//t9Wf/7fVn/+31Y//t9Wf/7fVn/+31Z//x9WP/8fVn/+31Z//x9Wf/7fVn//H1Z//t9Wf/8fVn/+31Z//x9Wf/8fVn//H1Z//t9Wf/8fVn/+31Z/vt9Wf38fVn7/H1Z9/x9WfL7fFjZ+3xYift8WCr7fFgG+3xYAft8WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+3xYAPt8WAH7fFgQ+3xYc/t8WNn8fVn1/H1Z/fx9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z/fx9Wfb7fFjd+3xYfPt8WBP7fFgC+3xYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+3xYAPt8WAL7fFgm+3xYrvt9We/7fVn9+31Z//t8Wf/7fFj/+3xY//t9Wf/7fVn/+31Z//t9Wf/7fFj/+3xY//t8Wf/7fVn/+31Z//t9Wf/7fFj/+3xY//t8Wf/7fVn/+31Z//t9Wf/7fVj/+3xY//t8WP/7fFj/+31Y//t9Wf/7fVn/+31Z//t8Wf/7fFj/+3xY//t9Wf/7fVn/+31Z//t8Wf/7fFj/+3xY//t9Wf/7fVn/+31Z//t9Wf/7fFj/+3xY//t8Wf/7fVn/+31Z/vt9WfD7fFi2+3xYLft8WAP7fFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+3xYAPt8WAL7fFgx+3xYxvt9Wff7fFj/+3xY//t8WP/7fVn/+3xY//t8WP/7fVj/+31Z//t9Wf/7fVj/+3xY//t8WP/7fVn/+3xY//t8WP/7fFj/+31Z//t9WP/7fFj/+3xY//t8WP/7fVj/+31Y//t8WP/7fFj/+3xY//t9WP/7fFj/+3xY//t8WP/7fVj/+31Y//t9Wf/7fFj/+3xY//t8WP/7fVn/+3xY//t8WP/7fVj/+31Z//t9Wf/7fVj/+3xY//t8WP/7fVn/+3xY//t8WP/7fFj/+31Z+ft8WMz7fFg5+3xYA/t8WAAAAAAAAAAAAAAAAAAAAAAA+3xYAPt8WAH7fFgp+3xYxvx9WPn8fVj//H1Y//x9Wf/8fVj//H1Y//x9WP/8fVn//H1Y//x9WP/8fVj//H1Z//x9WP/8fVj//H1Y//x9Wf/8fVj//H1Y//x9WP/8fVn//H1Y//x9WP/8fVj//H1Z//x9WP/8fVj//H1Y//x9WP/8fVn//H1Y//x9WP/8fVj//H1Z//x9WP/8fVj//H1Y//x9Wf/8fVj//H1Y//x9WP/8fVn//H1Y//x9WP/8fVj//H1Z//x9WP/8fVj//H1Y//x9Wf/8fVj//H1Y//x9WP/8fVn7+3xYzft8WDH7fFgC+3xYAAAAAAAAAAAAAAAAAPt8WAH7fFgT+3xYtfx9Wfj7fVj//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//t9WP/8fVn//H1Z//t9Wf/8fVn//H1Z//x9Wf/8fVn/+31Y//x9Wf/8fVn//H1Z//x9Wf/7fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn/+31Z//x9Wf/7fVj//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//t9WP/8fVn//H1Z//t9Wf/8fVn//H1Z//x9Wf/8fVn/+31Y//x9Wf/8fVn//H1Z//x9Wfn7fFi++3xYGft8WAEAAAAAAAAAAPt8WAD7fFgG+3xYgfx9WfD8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z8/t8WI/7fFgG+3xYAAAAAAD7fFgC+3xYMft8WOD8fFn+/HxZ//x8Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fFn//HxZ//x8Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fFn//HxZ//x8Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fFn//HxZ//x8Wf77fFjk+3xYPPt8WAMAAAAA+3xYB/t8WJb7fFj3+3xY//t8WP/7fFj/+3xY//t8Wf/7fFj/+3xY//t8WP/7fFj/+3xZ//t8WP/7fFn/+3xZ//t8Wf/7fFn/+3xY//t8WP/7fFj/+3xY//t8Wf/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8Wf/7fFj/+3xY//t8WP/7fFj/+3xZ//t8WP/7fFn/+3xZ//t8Wf/7fFn/+3xY//t8WP/7fFj/+3xY//t8Wf/7fFj/+3xY//t8WP/7fFj/+3xY+Pt8WKT7fFgI+3xYAft8WCL7fFjg/HxY/vx8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP77fFnm+3xYLft8WAX7fFhj/HxY8/x8Wf/7fFj/+3xY//x8Wf/7fFj/+3xZ//x8WP/8fFj/+3xZ//x8Wf/8fFj//HxZ//x8Wf/8fFn//HxZ//x8WP/8fFn/+3xZ//x8WP/8fFn/+3xZ//t8WP/8fFj//HxY//t8WP/8fFj//HxY//x8WP/8fFj//HxZ//x8WP/8fFj//HxY//x8WP/7fFj//HxY//x8Wf/7fFj/+3xZ//x8WP/8fFj/+3xZ//x8Wf/8fFj//HxZ//x8Wf/8fFn//HxZ//x8WP/8fFn/+3xZ//x8WP/8fFn/+3xZ//t8WP/8fFj/+3xY//t8WP/8fFn//HxY9Pt8WHL7fFgJ+3xYovt8Wfn8fFn//HxZ//t8Wf/8fFn/+3xY//x8Wf/8fVn/+3xY//x8Wf/8fFn//H1Z//x8Wf/7fFn/+3xZ//t8Wf/7fFn//HxZ//x8Wf/7fFj//HxZ//x8Wf/7fFj//H1Y//x8Wf/8fFn//HxZ//x8Wf/8fFn//HxZ//x8Wf/8fFn/+3xZ//x8Wf/8fFn/+3xZ//t8Wf/8fFn/+3xY//x8Wf/8fVn/+3xY//x8Wf/8fFn//H1Z//x8Wf/7fFn/+3xZ//t8Wf/7fFn//HxZ//x8Wf/7fFj//HxZ//x8Wf/7fFj//H1Z//x8Wf/8fFn//HxZ//x9Wfr7fFix+3xYDPt8WND7fVj9+31Z//t9WP/7fVn/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVn/+31Y//t9WP/7fVj/+31Y//t9WP/7fVn/+31Y//t9WP/7fVn/+31Y//t9WP/7fVj/+31Y//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Y//t9WP/7fVn/+31Z//t9Wf/7fVn/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVn/+31Y//t9WP/7fVj/+31Y//t9WP/7fVn/+31Y//t9WP/7fVn/+31Y//t9WP/7fVj/+31Y//t9Wf/7fVn++3xY3Pt8WBn7fFjo/H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9WO37fFgm+3xY7/t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFjw+3xYLPx8WPD8fVn//H1Z//x9Wf/8fVj++3xZw/t8WK77fFit+3xYrft8WK37fFis/HxY2Px8WPr8fFj/+3xY3/t8WLb7fFis+3xYrft8WK37fFit+3xYrft8WK37fFit+3xYrft8WK37fFit+3xYrft8WK37fFit+3xYrft8WK37fFit+3xYrft8WKv7fFjC/HxY7/x9WP/8fFj//HxY5/t8WLb7fFis+3xYrft8WK37fFit+3xYrft8WK37fFit+3xYr/t8WLP7fFi8+3xYzPt8WOf7fFj//HxY//x8WP/8fVj//H1Y//x8WP/8fVj//H1Z//x9Wf/8fVn//HxY8ft8WCz7fVjw/H1Y//t9WP/7fVj//H1Y/Pt8WV77fFgn+3xYI/t8WCP7fFgj+3xYIvx9WZb8fVjx+31Y//t8WKn7fFg7+3xYIft8WCP7fFgj+3xYI/t8WCP7fFgj+3xYI/t8WCP7fFgj+3xYI/t8WCP7fFgj+3xYI/t8WCP7fFgj+3xYI/t8WCP7fFgf/HxYXvx9WNX8fVj//H1Y//t9WL/7fFg8+3xYIvt8WCP7fFgj+3xYI/t8WCP7fFgj+3xYI/t8WCT7fFgm+3xYKft8WC/7fFg6+3xYWPt8WJz7fFjs/H1Y//x9WP/7fVj//H1Y//t9WP/7fVj//H1Y//t9WPH7fFgs+31Y8Px9WP/7fVj//H1Y//t9WPv7fFhC+3xYBft8WAAAAAAAAAAAAPx9WAD8fViE+31Y7vx9WP/7fFia+3xYHPt8WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/HxYAPx8WET8fVjO/H1Y//t9WP/7fViz+3xYG/t8WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADdfFgA/3xYAPp8WAT7fFge+3xYVPt8WMP7fFj++31Y//x9WP/8fVj/+31Y//x9Wf/8fVjx+3xYLPx9WfD8fVn//H1Z//x9Wf/8fVn7+3xYRPt8WAX7fFgAAAAAAAAAAAD7fVkA+31Zhfx9We/8fVn/+3xYm/t8WBz7fFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPx8WQD8fFlE/H1Zzvx9Wf/8fVn//H1ZtPt8WBz7fFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+3xYAPt8WAb7fFhB+3xYyfx9Wf78fVn//H1Z//x9Wf/8fVn//H1Z8ft8WCz7fFjw+3xY//t8WP/7fFj/+3xY+/t8WET7fFgF+3xYAAAAAAAAAAAA/H1ZAPx9WYX7fFjv+3xY//t8WJv7fFgc+3xYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8fFkA/HxZRPx8Wc77fFj/+3xY//t8WLP7fFgb+3xYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD7fFgA+3xYB/t8WFP7fFjz+3xY//t8WP/7fFj/+3xY//t8WPH7fFgs+3xY8Pt8WP/7fVj/+3xY//t8WPv7fFhE+3xZBft8WQAAAAAAAAAAAPx9WQD8fVmF+31Y7/t8WP/7fFib+3xYHPt8WAAAAAAAAAAAAPt9WAD7fVgR/H1ZLfx9WTb8fVk2/H1ZNvx9WTb8fVk2/H1ZNvx9WTb8fVk2/H1ZNvx9WTb8fVk2/H1ZMvx8WWv7fFjY+3xY//t8WP/7fFjE+3xYTPx9WTT8fVk2/H1ZNvx9WTb8fVk2/H1ZNvx9WTX7fFgw+3xYH/t8WAX7fFgAAAAAAAAAAAAAAAAA+3xYAPt8WAD7fFgX+3xYtft8WP37fFj/+31Y//t8WP/7fFjx+3xYLPx8WPD7fFj//HxY//x8WP/8fFj7+3xYRPt8WAX7fFgAAAAAAAAAAAD7fFgA+3xYhfx8WO/8fFj/+3xYm/t8WBz7fFgAAAAAAAAAAAD7fVkA+31ZQvx8WKr8fFjL/HxYyPx8WMj8fFjI/HxYyPx8WMj8fFjI/HxYyPx8WMj8fFjI/HxYyPx8WMf7fFjX/HxY9Px8WP/8fFj//HxY7/x8WM78fFjI/HxYyPx8WMj8fFjI/HxYyPx8WMj8fFjI/HxYxfx8WLz7fFib+3xYRvt8WAAAAAAAAAAAAAAAAAD7fFgA+3xYC/t8WHD8fFj8/HxY//x8WP/8fFj//HxY8ft8WCz8fFjw+3xY//x8WP/8fFj//HxY+/t8WET7fFkF+3xZAAAAAAAAAAAA/H1YAPx9WIX8fFjv/HxY//t8WJv7fFgc+3xYAAAAAAAAAAAA/H1ZAPx9WVf8fFjZ/HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj/+3xY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY+fx8WLf7fFgj+3xYAAAAAAAAAAAA+3xYAPt8WAX7fFhH/HxY+/x8WP/8fFj//HxY//x8WPH7fFgs+3xZ8Pt8Wf/7fFn/+3xZ//t8Wfv7fFlE+3xZBft8WQAAAAAAAAAAAPx9WQD8fVmF+3xZ7/t8Wf/7fFib+3xYHPt8WAAAAAAAAAAAAPt9WQD7fVlT+31Z2Pt9Wf/7fVn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+31Z//t9Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFnk+3xYXvt8WAAAAAAAAAAAAPt8WAD7fFgD+3xYOft8Wfv7fFn/+3xZ//t8Wf/7fFnx+3xYLPx8WfD8fFn//HxZ//x8Wf/8fVn7+3xZRPt8WQX7fFkAAAAAAAAAAAD8fFkA/HxZhfx9We/8fFn/+3xYoft8WB77fFgAAAAAAAAAAAD7fFgA+3xYSft8WdP8fFn//HxZ//x9Wf/8fVn//HxZ//x8Wf/8fFn//HxZ//x8Wf/8fFn//HxZ//x8Wf/8fFn//HxZ//x8Wf/8fVn//H1Z//x8Wf/8fFn//HxZ//x8Wf/8fFn//HxZ//x8Wf/8fFn//HxZ//x8Wf/8fFn//H1Z6vt8WHX7fFgAAAAAAAAAAAD7fFgA+3xYBft8WEL8fVn7/HxZ//x8Wf/8fFn//HxZ8ft8WCz7fFjw+3xY//t8WP/7fFj/+3xY+/t8WUT7fFkF+3xZAAAAAAAAAAAA/H1YAPx9WIX8fFjv+3xY//t8WLD7fFgj+3xYAAAAAAAAAAAA+3xYAPt8WCf7fFjB+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WOD7fFhL+3xYAAAAAAAAAAAA+3xYAPt8WAn7fFhi+3xY/Pt8WP/7fFj/+3xY//t8WPH7fFgs+3xY8Pt8Wf/7fFn/+3xY//t8WPv7fFlE+3xZBft8WQAAAAAAAAAAAPx9WQD8fVmF+3xZ7/t8Wf/7fFjM+3xYLPt8WAAAAAAAAAAAAPt8WAD7fFgF+3xYd/t8WOf7fFj/+3xZ//t8WP/7fFj/+3xY//t8Wf/7fFj/+3xY//t8WP/7fFj/+3xY//t8Wf/7fFj/+3xY//t8WP/7fFn/+3xZ//t8WP/7fFj/+3xY//t8WP/7fFn/+3xZ//t8WP/7fFj/+3xY//t8WOn7fFiG+3xYEft8WAAAAAAAAAAAAPt8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WO/7fFj/+3xY//t8WP/7fFj/+3xY8ft8WCz8fVjw/H1Y//x9WP/8fVj//H1Y+/t8WET7fFkF+3xZAAAAAAAAAAAA/H1ZAPx9WYX8fVnv/H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/7fVj2+3xYkft8WB37fFgAAAAAAAAAAAD7fFgA+ntXAvt8WHn7fFj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//t9WP/7fFj6+3xY0/t8WHT7fFgM+3xYAAAAAAAAAAAA+3xYAPt8WBb7fFi1/HxY/fx9WP/8fVj//H1Y//x9WPH7fFgs+31Z8Pt9Wf/7fVn/+31Z//t9Wfv7fFlE+3xYBft8WAAAAAAAAAAAAPx9WQD8fVmF+31Z7/t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wdn7fFhO+3xYAAAAAAAAAAAA+XpWAPt8WAD7fFhp+3xY//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fFjd+3xYQPt8WAAAAAAAAAAAAPt8WAD7fFgL+3xYcPt9Wfz7fVn/+31Z//t9Wf/7fVnx+3xYLPx9WfD8fVj//H1Z//x9Wf/8fVn7+3xZRPt8WQX7fFkAAAAAAAAAAAD7fFgA+3xYhfx9WO/8fVn//H1Z//x9Wf/8fVn//H1Z//x9WP/8fVj//H1Z//x9Wf/8fVn//H1Y//x9Wf/8fVn//H1Z//x9Wf/8fVno+3xYXPt8WAAAAAAAAAAAAAAAAAD7fFgA+3xYZPt8WPr8fVn//H1Z//x9WP/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Y6Pt8WGz7fFgAAAAAAAAAAAD7fFgA+3xYBvt8WEv8fVn7/H1Z//x9Wf/8fVj//H1Z8ft8WCz8fVnw/H1Z//x9Wf/8fVn//H1Z+/t8WET7fFgF+3xYAAAAAAAAAAAA/HxZAPx8WYX8fVnv/H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9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WDP7fFg/+3xYY/t8WK77fFjv+3xY//t8WP/7fFj/+3xY//t8WP/7fFjA+3xYQfx9WSf8fVkp/H1ZKfx9WSn8fVkp/H1ZKfx9WSn8fVkp/H1YKft8WCv7fFgv+3xYN/t8WFL7fFiV+3xY6vt8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFjx+3xYK/x8WPD8fFj//HxY//x8WP/8fFj++3xZy/x9Wbn8fVm4/H1ZuPx9Wbj8fVm4/H1Z3fx8WPr8fFj//HxY+/x8WMj8fVm3/H1ZuPx9Wbj8fVm4/H1ZuPx9Wbj8fVm4/H1ZuPx9Wbj8fVi4+3xYuft8WMD7fFjS+3xY7fx8WP78fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY6vx8WMD8fVm3/H1ZuPx9Wbj8fVm4/H1ZuPx9Wbj8fVm4/H1YuPx9WLn7fFi++3xYx/t8WNz7fFj7/HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY8ft8WCX8fFnu/HxY//x8WP/8fFj//HxY//x8Wf/8fFj//HxY//x8WP/8fFj//H1Z//x8WP/8fFj//H1Z//x8WP/8fFj//H1Z//x8WP/8fFj//H1Z//x8WP/8fFj/+3xY//t8WP/8fFn//HxZ//x8Wf/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxZ//x8Wf/8fFj//HxY//x8WP/8fFj//H1Z//x8WP/8fFj//H1Z//x8WP/8fFj//H1Z//x8WP/8fFj//H1Z//x8WP/8fFj/+3xY//x8WP/8fFn//HxY//x8Wf/8fFj//HxY//x8WfD7fFgX+3xY5ft9WP77fVj/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVj/+31Z//t9WP/7fVn/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Z//t9WP/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9WP/7fVn/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Z//t9WP/7fVn/+31Y//t9Wf/7fVj/+31Z//t9Wf/7fVn/+31Y//t9WP/7fVjr+3xYDPt8WM38fVn8/H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn9+3xY2vt8WAn7fFie+3xY+Pt8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t9WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t9WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY+vt8WK37fFgF+3xYXvt9WPL7fVj/+3xY//t8WP/7fVj/+31Y//t8WP/7fVj/+31Y//t8WP/7fVj/+31Y//t8WP/7fVj/+31Y//t8WP/7fVj/+31Y//t8WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fFj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+3xY//t9WP/7fVj/+31Y//t8WP/7fVj/+31Y//t8WP/7fVj/+31Y//t8WP/7fVj/+31Y//t8WP/7fVj/+31Y//t8WP/7fVj/+31Y//t9WP/7fVj/+31Y//t8WP/7fFj/+31Y//t9WPT7fFhs+3xYAft8WB77fFjd/H1Y/vx9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fFj//H1Y//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fFj//H1Y//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP77fFjj+3xYKQAAAAD7fFgH+3xYkPt9Wfb7fVj//H1Y//t9WP/7fVj/+31Z//t9WP/7fVj/+31Y//x9Wf/7fVj/+31Z//t9WP/7fVj/+31Z//t9WP/8fVn/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj//H1Y//t9WP/7fVn/+31Z//t9Wf/7fVn/+31Y//t9Wf/7fVn/+31Z//t9Wf/7fVj//H1Y//t9WP/7fVj/+31Z//t9WP/7fVj/+31Y//x9Wf/7fVj/+31Z//t9WP/7fVj/+31Z//t9WP/8fVn/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj//H1Y//t9WP/7fVn4+3xYnvt8WAcAAAAA+3xYAvt8WCv7fFjc+31Z/ft9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn++3xY4vt8WDb7fFgCAAAAAPt8WAD7fFgF+3xYefx9We78fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z8ft8WIb7fFgG+3xYAAAAAAAAAAAA+3xYAPt8WBD7fFiu+31Z9vt9Wf/7fVn/+31Z//t9Wf/7fVn/+3xZ//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+3xZ//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t8Wf/7fVn/+3xZ//t8Wf/7fVn/+31Z//t9Wf/7fFn/+3xZ//t9Wf/7fFn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+3xZ//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+3xZ//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z+Pt8WLf7fFgV+3xYAQAAAAAAAAAAAAAAAPt8WAD7fFgB+3xYI/t8WMD8fFj4/HxY//x8Wf/8fFj//HxZ//x8WP/8fFj//HxY//x8WP/8fFn//HxZ//x8WP/8fFj//HxY//x8WP/8fFn//HxY//x8Wf/8fFj//HxY//x8WP/8fFj//HxY//x8Wf/8fFj//HxY//x8WP/8fFj//HxY//x8Wf/8fFn//HxY//x8WP/8fFj//HxY//x8Wf/8fFj//HxZ//x8WP/8fFj//HxY//x8WP/8fFn//HxZ//x8WP/8fFj//HxY//x8WP/8fFn//HxY//x8Wf/8fFj//HxY+vt8WMj7fFgr+3xYAvt8WAAAAAAAAAAAAAAAAAAAAAAA+3xYAPt8WAL7fFgr+3xYvvx8WPX8fFn+/HxY//x8WP/8fFj//HxY//x8WP/8fFn//HxZ//x8Wf/8fFn//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFn//HxY//x8WP/8fFj//HxY//x8WP/8fFn//HxZ//x8Wf/8fFn//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY9/t8WMT7fFgx+3xYAvt8WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD7fFgA+3xYAvt8WCD7fFil+3xZ6/t8Wf37fFn/+3xZ//t8Wf/7fFn/+31Z//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+31Z//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn9+3xZ7ft8WK77fFgm+3xYAvt8WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPt8WAD7fFgB+3xYC/t8WGf7fFjT+31Y8/t9WPz7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+3xY//t9WP/7fFj/+31Y//t8WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Y//t8WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+3xY//t9WP37fFj0+3xY1vt8WHD7fFgO+3xYAft8WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+nxYAPp8WAD7fFgE+3xYHft8WHb7fFjM/H1Z7fx9WfX8fVn5/H1Z/Px9Wf38fVn+/H1Z/vx9Wf78fVn+/H1Z/vx9Wf78fVn+/H1Z/vx9Wf78fVn+/H1Z/vx9Wf78fVn+/H1Z/vx9Wf78fVn+/H1Z/vx9Wf78fVn+/H1Z/vx9Wf78fVn+/H1Z/vx9Wf78fVn+/H1Z/vx9Wf78fVn+/H1Z/vx9Wf78fVn+/H1Z/fx9Wfz8fVn5/H1Z9vx9We77fFjR+3xYfPt8WCH7fFgF+3xYAPt8WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+3xYAPt8WAH7fFgF+3xYD/t8WED7fFh7+3xYqPt8WMf7fFjZ/H1Z3/x9WeD8fVnf/H1Z3/x9Wd/8fVnf/H1Z3/x9Wd/8fVnf/H1Z3/x9Wd/8fVnf/H1Z3/x9Wd/8fVnf/H1Z3/x9Wd/8fVnf/H1Z3/x9Wd/8fVnf/H1Z3/x9Wd/8fVnf/H1Z3/x9Wd/8fVnf/H1Z3/x9Wd/8fVnf/H1Z3/t8WNv7fFjK+3xYrPt8WH77fFhF+3xYEvt8WAb7fFgB+3xYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+ntXAPp7VwD7fFgD+3xYB/t8WAr7fFgM+3xYDfx9WQ38fVkN/H1ZDfx9WQ38fVkN/H1ZDfx9WQ38fVkN/H1ZDfx9WQ38fVkN/H1ZDfx9WQ38fVkN/H1ZDfx9WQ38fVkN/H1ZDfx9WQ38fVkN/H1ZDfx9WQ38fVkN/H1ZDfx9WQ38fVkN/H1ZDfx9WQ38fVkN/H1ZDfx9WQ37fFgN+3xYDPt8WAr7fFgH+3xYBPt8WAH7fFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAH/8AAAAAAAAH/gAAAAAAAAP8AAAAAAAAAfgAAAAAAAAA8AAAAAAAAABwAAAAAAAAAGAAAAAAAAAAIAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPB//+B/+AAA8H//4H/+AADwf//gf/8AAPB4AAAAH4AA8HgAAAAPgADweAAAAAeAAPB4AAAAB4AA8HgAAAAHgADweAAAAAeAAPB4AAAAB4AA8HwAAAAPAADwPgAAAD4AAPA//wAf/AAA8B//gB/8AADwB//AH/wAAPAAB+AAPgAA8AAD4AAPAADwAAHgAAeAAPAAAfAAB4AA8AAB8AAHgADwAAHwAAeAAPAAAeAAB4AA8AAD4AAPgADwAA/gAB8AAPB//8B//wAA8H//gH/+AADwf/4Af/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAgAAAAAAAAACAAAAAAAAAAMAAAAAAAAABwAAAAAAAAAHgAAAAAAAAA/AAAAAAAAAH+AAAAAAAAA/8AAAAAAAAH/8AAAAAAAB//+AAAAAAA/8=
// @match        *://*.123pan.com/*
// @match        *://*.123pan.cn/*
// @match        *://*.123684.com/*
// @match        *://*.123865.com/*
// @match        *://*.123952.com/*
// @match        *://*.123912.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        unsafeWindow
// @grant        GM_info
// @grant        GM_registerMenuCommand
// @grant        GM_setClipboard
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    // 检测unsafeWindow
    if (typeof (unsafeWindow) === 'undefined') window.unsafeWindow = window;

    // 配置验证和加载函数
    function loadConfig() {
        const defaultConfig = {
            vip: 1,
            svip: 1,
            pvip: 0,
            ad: 1,
            name: "QingJ",
            photo: "http://q.qlogo.cn/headimg_dl?dst_uin=2903609300&spec=640&img_type=jpg",
            mail: "",
            phone: "",
            id: "",
            level: 128,
            endtime: 253402185600,
            debug: 0
        };

        const config = {};
        
        for (const [key, defaultValue] of Object.entries(defaultConfig)) {
            let value = GM_getValue(key, defaultValue);
            
            // 类型验证
            if (typeof value !== typeof defaultValue) {
                console.warn(`[123云盘解锁] 配置项 ${key} 类型错误，使用默认值`);
                value = defaultValue;
            }
            
            // 数值范围验证
            if (key === 'level' && (typeof value !== 'number' || value < 0 || value > 128)) {
                console.warn(`[123云盘解锁] 等级值超出范围，使用默认值`);
                value = 128;
            }
            
            // VIP逻辑验证
            if (key === 'vip' && (value !== 0 && value !== 1)) {
                value = 1;
            }
            if (key === 'svip' && (value !== 0 && value !== 1)) {
                value = 1;
            }
            if (key === 'pvip' && (value !== 0 && value !== 1)) {
                value = 0;
            }
            
            // URL验证（宽松检查）
            if (key === 'photo' && value && typeof value === 'string') {
                if (value.length > 2000) {
                    console.warn(`[123云盘解锁] 头像URL过长，使用默认值`);
                    value = defaultValue;
                }
            }
            
            config[key] = value;
        }
        
        return config;
    }

    // 从存储中读取配置（带验证）
    var user = loadConfig();

    // =============================================================================
    // 秒传功能模块 - 整合自 123FastLink
    // 特别鸣谢：@Baoqing、@Chaofan、@lipkiat
    // =============================================================================

    // 秒传配置
    const FastLinkConfig = {
        enabled: GM_getValue('fastlink_enabled', 1),
        getFileListPageDelay: 500,
        getFileInfoBatchSize: 100,
        getFileInfoDelay: 200,
        getFolderInfoDelay: 300,
        saveLinkDelay: 100,
        mkdirDelay: 100,
        usesBase62EtagsInExport: true,
        COMMON_PATH_LINK_PREFIX: "123FLCPV2$"
    };

    // 1. API通信类
    class PanApiClient {
        constructor() {
            this.host = 'https://' + window.location.host;
            this.authToken = null;
            this.loginUuid = null;
            this.progress = 0;
            this.progressDesc = "";
        }

        init() {
            this.authToken = localStorage['authorToken'];
            this.loginUuid = localStorage['LoginUuid'];
        }

        buildURL(path, queryParams) {
            const queryString = new URLSearchParams(queryParams || {}).toString();
            return `${this.host}${path}?${queryString}`;
        }

        async sendRequest(method, path, queryParams, body) {
            const headers = {
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization': 'Bearer ' + this.authToken,
                'platform': 'web',
                'App-Version': '3',
                'LoginUuid': this.loginUuid,
                'Origin': this.host,
                'Referer': document.location.href,
            };
            try {
                const response = await fetch(this.buildURL(path, queryParams), {
                    method, headers, body, credentials: 'include'
                });
                const data = await response.json();
                if (data.code !== 0) {
                    throw new Error(data.message);
                }
                return data;
            } catch (e) {
                console.error('[123云盘解锁] API请求失败:', e);
                throw e;
            }
        }

        async getOnePageFileList(parentFileId, page) {
            const urlParams = {
                driveId: '0',
                limit: '100',
                next: '0',
                orderBy: 'file_name',
                orderDirection: 'asc',
                parentFileId: parentFileId.toString(),
                trashed: 'false',
                SearchData: '',
                Page: page.toString(),
                OnlyLookAbnormalFile: '0',
                event: 'homeListFile',
                operateType: '1',
                inDirectSpace: 'false'
            };
            const data = await this.sendRequest("GET", "/b/api/file/list/new", urlParams);
            return { data: { InfoList: data.data.InfoList }, total: data.data.Total };
        }

        async getFileList(parentFileId) {
            let InfoList = [];
            this.progress = 0;
            this.progressDesc = `获取文件列表 ID：${parentFileId}`;
            const info = await this.getOnePageFileList(parentFileId, 1);
            InfoList.push(...info.data.InfoList);
            const total = info.total;
            if (total > 100) {
                const times = Math.ceil(total / 100);
                for (let i = 2; i < times + 1; i++) {
                    this.progress = Math.ceil((i / times) * 100);
                    const pageInfo = await this.getOnePageFileList(parentFileId, i);
                    InfoList.push(...pageInfo.data.InfoList);
                    await new Promise(resolve => setTimeout(resolve, FastLinkConfig.getFileListPageDelay));
                }
            }
            this.progress = 100;
            return { data: { InfoList }, total: total };
        }

        async getFileInfo(idList) {
            const fileIdList = idList.map(fileId => ({ fileId }));
            const data = await this.sendRequest("POST", "/b/api/file/info", {}, JSON.stringify({ fileIdList }));
            return { data: { InfoList: data.data.infoList } };
        }

        async uploadRequest(fileInfo) {
            try {
                const response = await this.sendRequest('POST', '/b/api/file/upload_request', {}, JSON.stringify({
                    ...fileInfo, RequestSource: null
                }));
                const reuse = response['data']['Reuse'];
                if (response['code'] !== 0) {
                    return [false, response['message']];
                }
                if (!reuse) {
                    return [false, "未能实现秒传"];
                } else {
                    return [true, null];
                }
            } catch (error) {
                console.error('[123云盘解锁] 上传请求失败:', error);
                return [false, '请求失败'];
            }
        }

        async getParentFileId() {
            const homeFilePath = JSON.parse(sessionStorage['filePath'])['homeFilePath'];
            const parentFileId = (homeFilePath[homeFilePath.length - 1] || 0);
            return parentFileId.toString();
        }

        async getFile(fileInfo, parentFileId) {
            if (!parentFileId) {
                parentFileId = await this.getParentFileId();
            }
            return await this.uploadRequest({
                driveId: 0,
                etag: fileInfo.etag,
                fileName: fileInfo.fileName,
                parentFileId,
                size: fileInfo.size,
                type: 0,
                duplicate: 1
            });
        }

        async mkdir(parentFileId, folderName = "New Folder") {
            let folderFileId = null;
            try {
                const response = await this.sendRequest('POST', '/b/api/file/upload_request', {}, JSON.stringify({
                    driveId: 0,
                    etag: "",
                    fileName: folderName,
                    parentFileId,
                    size: 0,
                    type: 1,
                    duplicate: 1,
                    NotReuse: true,
                    event: "newCreateFolder",
                    operateType: 1,
                    RequestSource: null
                }));
                folderFileId = response['data']['Info']['FileId'];
            } catch (error) {
                console.error('[123云盘解锁] 创建文件夹失败:', error);
                return { 'folderFileId': null, 'folderName': folderName, 'success': false };
            }
            return { 'folderFileId': folderFileId, 'folderName': folderName, 'success': true };
        }
    }

    // 2. 选中文件管理类
    class TableRowSelector {
        constructor() {
            this.selectedRowKeys = [];
            this.unselectedRowKeys = [];
            this.isSelectAll = false;
            this._inited = false;
        }

        init() {
            if (this._inited) return;
            this._inited = true;
            const originalCreateElement = document.createElement;
            const self = this;
            document.createElement = function (tagName, options) {
                const element = originalCreateElement.call(document, tagName, options);
                const observer = new MutationObserver(() => {
                    if (element.classList.contains('ant-table-row') && element.classList.contains('ant-table-row-level-0')) {
                        const input = element.querySelector('input');
                        if (input) {
                            input.addEventListener('click', function () {
                                const rowKey = element.getAttribute('data-row-key');
                                if (self.isSelectAll) {
                                    if (!this.checked) {
                                        if (!self.unselectedRowKeys.includes(rowKey)) {
                                            self.unselectedRowKeys.push(rowKey);
                                        }
                                    } else {
                                        const idx = self.unselectedRowKeys.indexOf(rowKey);
                                        if (idx > -1) {
                                            self.unselectedRowKeys.splice(idx, 1);
                                        }
                                    }
                                } else {
                                    if (this.checked) {
                                        if (!self.selectedRowKeys.includes(rowKey)) {
                                            self.selectedRowKeys.push(rowKey);
                                        }
                                    } else {
                                        const idx = self.selectedRowKeys.indexOf(rowKey);
                                        if (idx > -1) {
                                            self.selectedRowKeys.splice(idx, 1);
                                        }
                                    }
                                }
                            });
                        }
                        observer.disconnect();
                    } else if (element.classList.contains('ant-checkbox-input') && element.getAttribute('aria-label') === 'Select all') {
                        if (!(element.parentElement.classList.contains('ant-checkbox-indeterminate') || element.parentElement.classList.contains('ant-checkbox-checked'))) {
                            self.unselectedRowKeys = [];
                            self.selectedRowKeys = [];
                            self.isSelectAll = false;
                        }
                        self._bindSelectAllEvent(element);
                    } else if (element.classList.contains('ant-btn') && element.classList.contains('ant-btn-link')) {
                        element.addEventListener('click', function () {
                            self.selectedRowKeys = [];
                            self.unselectedRowKeys = [];
                            self.isSelectAll = false;
                        });
                    }
                });
                observer.observe(element, {
                    attributes: true, attributeFilter: ['class', 'aria-label']
                });
                return element;
            };
        }

        _bindSelectAllEvent(checkbox) {
            if (checkbox.dataset.selectAllBound) return;
            checkbox.dataset.selectAllBound = 'true';
            checkbox.addEventListener('click', () => {
                if (checkbox.checked) {
                    this.isSelectAll = true;
                    this.unselectedRowKeys = [];
                    this.selectedRowKeys = [];
                } else {
                    this.isSelectAll = false;
                    this.selectedRowKeys = [];
                    this.unselectedRowKeys = [];
                }
            });
        }

        getSelection() {
            return {
                isSelectAll: this.isSelectAll,
                selectedRowKeys: [...this.selectedRowKeys],
                unselectedRowKeys: [...this.unselectedRowKeys]
            };
        }
    }

    // 3. 秒传链接管理类
    class ShareLinkManager {
        constructor(apiClient) {
            this.apiClient = apiClient;
            this.progress = 0;
            this.progressDesc = "";
            this.taskCancel = false;
            this.fileInfoList = [];
            this.commonPath = "";
        }

        async _getAllFileInfoByFolderId(parentFileId, folderName = '', total) {
            this.progressDesc = `正在扫描文件夹：${folderName}`;
            let progress = this.progress;
            const progressUpdater = setInterval(() => {
                this.progress = progress + this.apiClient.progress / total;
                this.progressDesc = this.apiClient.progressDesc;
                if (this.progress > 100) {
                    clearInterval(progressUpdater);
                }
            }, 500);
            const allFileInfoList = (await this.apiClient.getFileList(parentFileId)).data.InfoList.map(file => ({
                fileName: file.FileName, etag: file.Etag, size: file.Size, type: file.Type, fileId: file.FileId
            }));
            clearInterval(progressUpdater);

            const fileInfo = allFileInfoList.filter(file => file.type !== 1);
            fileInfo.forEach(file => {
                file.path = folderName + file.fileName;
            });
            this.fileInfoList.push(...fileInfo);

            const directoryFileInfo = allFileInfoList.filter(file => file.type === 1);
            for (const folder of directoryFileInfo) {
                await new Promise(resolve => setTimeout(resolve, FastLinkConfig.getFolderInfoDelay));
                if (this.taskCancel) {
                    this.progressDesc = "任务已取消";
                    return;
                }
                await this._getAllFileInfoByFolderId(folder.fileId, folderName + folder.fileName + "/", total * directoryFileInfo.length);
            }
            this.progress = progress + 100 / total;
        }

        async _getFileInfoBatch(idList) {
            const total = idList.length;
            let completed = 0;
            let allFileInfo = [];
            for (let i = 0; i < total; i += FastLinkConfig.getFileInfoBatchSize) {
                const batch = idList.slice(i, i + FastLinkConfig.getFileInfoBatchSize);
                try {
                    const response = await this.apiClient.getFileInfo(batch);
                    allFileInfo = allFileInfo.concat(response.data.InfoList || []);
                } catch (e) {
                    console.error('[123云盘解锁] 获取文件信息失败:', e);
                }
                completed += batch.length;
                this.progress = Math.round((completed / total) * 100 - 1);
                this.progressDesc = `正在获取文件信息... (${completed} / ${total})`;
                await new Promise(resolve => setTimeout(resolve, FastLinkConfig.getFileInfoDelay));
            }
            return allFileInfo.map(file => ({
                fileName: file.FileName, etag: file.Etag, size: file.Size, type: file.Type, fileId: file.FileId
            }));
        }

        async _getCommonPath() {
            if (!this.fileInfoList || this.fileInfoList.length === 0) return '';
            const pathArrays = this.fileInfoList.map(file => {
                const path = file.path || '';
                const lastSlashIndex = path.lastIndexOf('/');
                return lastSlashIndex === -1 ? [] : path.substring(0, lastSlashIndex).split('/');
            });
            let commonPrefix = [];
            const firstPath = pathArrays[0];
            for (let i = 0; i < firstPath.length; i++) {
                const currentComponent = firstPath[i];
                const allMatch = pathArrays.every(pathArray => pathArray.length > i && pathArray[i] === currentComponent);
                if (allMatch) {
                    commonPrefix.push(currentComponent);
                } else {
                    break;
                }
            }
            const commonPath = commonPrefix.length > 0 ? commonPrefix.join('/') + '/' : '';
            this.commonPath = commonPath;
            return commonPath;
        }

        async _getSelectedFilesInfo(fileSelectionDetails) {
            this.fileInfoList = [];
            if (!fileSelectionDetails.isSelectAll && fileSelectionDetails.selectedRowKeys.length === 0) {
                return false;
            }
            let fileSelectFolderInfoList = [];
            if (fileSelectionDetails.isSelectAll) {
                this.progress = 10;
                this.progressDesc = "正在递归获取选择的文件..."
                let allFileInfo = (await this.apiClient.getFileList(await this.apiClient.getParentFileId())).data.InfoList.map(file => ({
                    fileName: file.FileName, etag: file.Etag, size: file.Size, type: file.Type, fileId: file.FileId
                }));
                let fileInfo = allFileInfo.filter(file => file.type !== 1);
                fileInfo.filter(file => !fileSelectionDetails.unselectedRowKeys.includes(file.fileId.toString())).forEach(file => {
                    file.path = file.fileName;
                });
                this.fileInfoList.push(...fileInfo);
                fileSelectFolderInfoList = allFileInfo.filter(file => file.type === 1).filter(file => !fileSelectionDetails.unselectedRowKeys.includes(file.fileId.toString()));
            } else {
                let fileSelectIdList = fileSelectionDetails.selectedRowKeys;
                if (!fileSelectIdList.length) {
                    this.progress = 100;
                    this.progressDesc = "未选择文件";
                    return false;
                }
                const allFileInfo = await this._getFileInfoBatch(fileSelectIdList);
                const fileInfo = allFileInfo.filter(info => info.type !== 1);
                fileInfo.forEach(file => {
                    file.path = file.fileName;
                });
                this.fileInfoList.push(...fileInfo);
                fileSelectFolderInfoList = allFileInfo.filter(info => info.type === 1);
            }

            for (let i = 0; i < fileSelectFolderInfoList.length; i++) {
                const folderInfo = fileSelectFolderInfoList[i];
                this.progress = Math.round((i / fileSelectFolderInfoList.length) * 100);
                await new Promise(resolve => setTimeout(resolve, FastLinkConfig.getFolderInfoDelay));
                if (this.taskCancel) {
                    this.progressDesc = "任务已取消";
                    return true;
                }
                await this._getAllFileInfoByFolderId(folderInfo.fileId, folderInfo.fileName + "/", fileSelectFolderInfoList.length);
            }
            const commonPath = await this._getCommonPath();
            if (commonPath) {
                this.fileInfoList.forEach(info => {
                    info.path = info.path.slice(commonPath.length);
                });
            }
            return true;
        }

        async generateShareLink(fileSelectionDetails) {
            this.progress = 0;
            this.progressDesc = "准备获取文件信息...";
            const result = await this._getSelectedFilesInfo(fileSelectionDetails);
            if (!result) return '';
            this.progressDesc = "秒传链接生成完成";
            return this.buildShareLink(this.fileInfoList, this.commonPath);
        }

        buildShareLink(fileInfoList, commonPath) {
            const shareLinkFileInfo = fileInfoList.map(info => {
                return [FastLinkConfig.usesBase62EtagsInExport ? this._hexToBase62(info.etag) : info.etag, info.size, info.path.replace(/[%#$]/g, '')].join('#');
            }).filter(Boolean).join('$');
            const shareLink = `${FastLinkConfig.COMMON_PATH_LINK_PREFIX}${commonPath}%${shareLinkFileInfo}`;
            return shareLink;
        }

        _parseShareLink(shareLink, InputUsesBase62 = true) {
            let commonPath = '';
            let shareFileInfo = '';
            if (shareLink.slice(0, 4) === "123F") {
                const commonPathLinkPrefix = shareLink.split('$')[0];
                shareLink = shareLink.replace(`${commonPathLinkPrefix}$`, '');
                if (commonPathLinkPrefix + "$" === FastLinkConfig.COMMON_PATH_LINK_PREFIX) {
                    commonPath = shareLink.split('%')[0];
                    shareFileInfo = shareLink.replace(`${commonPath}%`, '');
                } else {
                    return null;
                }
            } else {
                shareFileInfo = shareLink;
                InputUsesBase62 = false;
            }
            const shareLinkList = Array.from(shareFileInfo.replace(/\r?\n/g, '$').split('$'));
            this.commonPath = commonPath;
            return shareLinkList.map(singleShareLink => {
                const singleFileInfoList = singleShareLink.split('#');
                if (singleFileInfoList.length < 3) return null;
                return {
                    etag: InputUsesBase62 ? this._base62ToHex(singleFileInfoList[0]) : singleFileInfoList[0],
                    size: singleFileInfoList[1],
                    path: singleFileInfoList[2],
                    fileName: singleFileInfoList[2].split('/').pop()
                };
            }).filter(Boolean);
        }

        async _makeDirForFiles(shareFileList) {
            const total = shareFileList.length;
            this.progressDesc = `正在创建文件夹...`;
            let folder = {};
            const rootFolderId = await this.apiClient.getParentFileId();
            if (this.commonPath) {
                const commonPathParts = this.commonPath.split('/').filter(part => part !== '');
                let currentParentId = rootFolderId;
                for (let i = 0; i < commonPathParts.length; i++) {
                    const currentPath = commonPathParts.slice(0, i + 1).join('/');
                    const folderName = commonPathParts[i];
                    if (!folder[currentPath]) {
                        const newFolder = await this.apiClient.mkdir(currentParentId, folderName);
                        await new Promise(resolve => setTimeout(resolve, FastLinkConfig.mkdirDelay));
                        folder[currentPath] = newFolder.folderFileId;
                    }
                    currentParentId = folder[currentPath];
                }
            } else {
                folder[''] = rootFolderId;
            }

            for (let i = 0; i < shareFileList.length; i++) {
                const item = shareFileList[i];
                const itemPath = item.path.split('/').slice(0, -1);
                let nowParentFolderId = folder[this.commonPath.slice(0, -1)] || rootFolderId;
                for (let i = 0; i < itemPath.length; i++) {
                    const path = itemPath.slice(0, i + 1).join('/');
                    if (!folder[path]) {
                        const newFolderID = await this.apiClient.mkdir(nowParentFolderId, itemPath[i]);
                        await new Promise(resolve => setTimeout(resolve, FastLinkConfig.mkdirDelay));
                        folder[path] = newFolderID.folderFileId;
                        nowParentFolderId = newFolderID.folderFileId;
                    } else {
                        nowParentFolderId = folder[path];
                    }
                    if (this.taskCancel) {
                        this.progressDesc = "任务已取消";
                        return shareFileList;
                    }
                }
                shareFileList[i].parentFolderId = nowParentFolderId;
                this.progress = Math.round((i / total) * 100);
                this.progressDesc = `正在创建文件夹... (${i + 1} / ${total})`;
            }
            return shareFileList;
        }

        async _saveFileList(shareFileList) {
            let completed = 0;
            let successList = [];
            let failedList = [];
            const total = shareFileList.length;
            for (let i = 0; i < shareFileList.length; i++) {
                if (this.taskCancel) {
                    this.progressDesc = "任务已取消";
                    break;
                }
                const fileInfo = shareFileList[i];
                if (i > 0) {
                    await new Promise(resolve => setTimeout(resolve, FastLinkConfig.saveLinkDelay));
                }
                const reuse = await this.apiClient.getFile({
                    etag: fileInfo.etag, size: fileInfo.size, fileName: fileInfo.fileName
                }, fileInfo.parentFolderId);
                if (reuse[0]) {
                    successList.push(fileInfo);
                } else {
                    fileInfo.error = reuse[1];
                    failedList.push(fileInfo);
                }
                completed++;
                this.progress = Math.round((completed / total) * 100);
                this.progressDesc = `正在保存第 ${completed} / ${total} 个文件...`;
            }
            return { success: successList, failed: failedList, commonPath: this.commonPath };
        }

        async saveShareLink(content) {
            let saveResult = { success: [], failed: [] };
            try {
                const jsonData = this.safeParse(content);
                if (jsonData && this.validateJson(jsonData)) {
                    saveResult = await this.saveJsonShareLink(jsonData);
                } else {
                    const shareFileList = this._parseShareLink(content);
                    if (!shareFileList) return { success: [], failed: [] };
                    saveResult = await this._saveFileList(await this._makeDirForFiles(shareFileList));
                }
            } catch (error) {
                console.error('[123云盘解锁] 保存失败:', error);
                saveResult = { success: [], failed: [] };
            }
            return saveResult;
        }

        _base62chars() {
            return '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }

        _hexToBase62(hex) {
            if (!hex) return '';
            let num = BigInt('0x' + hex);
            if (num === 0n) return '0';
            let chars = [];
            const base62 = this._base62chars();
            while (num > 0n) {
                chars.push(base62[Number(num % 62n)]);
                num = num / 62n;
            }
            return chars.reverse().join('');
        }

        _base62ToHex(base62) {
            if (!base62) return '';
            const chars = this._base62chars();
            let num = 0n;
            for (let i = 0; i < base62.length; i++) {
                num = num * 62n + BigInt(chars.indexOf(base62[i]));
            }
            let hex = num.toString(16);
            if (hex.length % 2) hex = '0' + hex;
            while (hex.length < 32) hex = '0' + hex;
            return hex;
        }

        // JSON相关功能
        safeParse(str) {
            try {
                return JSON.parse(str);
            } catch {
                return null;
            }
        }

        _formatSize(size) {
            if (size < 1024) return size + ' B';
            if (size < 1024 * 1024) return (size / 1024).toFixed(2) + ' KB';
            if (size < 1024 * 1024 * 1024) return (size / 1024 / 1024).toFixed(2) + ' MB';
            return (size / 1024 / 1024 / 1024).toFixed(2) + ' GB';
        }

        validateJson(json) {
            return (json && Array.isArray(json.files) && json.files.every(f => f.etag && f.size && f.path));
        }

        shareLinkToJson(shareLink) {
            const fileInfo = this._parseShareLink(shareLink);
            if (fileInfo.length === 0) {
                console.error('[123云盘解锁] 解析秒传链接失败:', shareLink);
                return { error: '解析秒传链接失败' };
            }
            if (FastLinkConfig.usesBase62EtagsInExport) {
                fileInfo.forEach(f => {
                    f.etag = this._hexToBase62(f.etag);
                });
            }
            const totalSize = fileInfo.reduce((sum, f) => sum + Number(f.size), 0);
            return {
                scriptVersion: "1.2.0",
                exportVersion: "1.0",
                usesBase62EtagsInExport: FastLinkConfig.usesBase62EtagsInExport,
                commonPath: this.commonPath,
                totalFilesCount: fileInfo.length,
                totalSize,
                formattedTotalSize: this._formatSize(totalSize),
                files: fileInfo.map(f => ({
                    etag: f.etag,
                    size: f.size,
                    path: f.path
                }))
            };
        }

        _parseJsonShareLink(jsonData) {
            this.commonPath = jsonData['commonPath'] || '';
            const shareFileList = jsonData['files'];
            if (jsonData['usesBase62EtagsInExport']) {
                shareFileList.forEach(file => {
                    file.etag = this._base62ToHex(file.etag);
                });
            }
            shareFileList.forEach(file => {
                file.fileName = file.path.split('/').pop();
            });
            return shareFileList;
        }

        async saveJsonShareLink(jsonContent) {
            const shareFileList = this._parseJsonShareLink(jsonContent);
            return this._saveFileList(await this._makeDirForFiles(shareFileList));
        }

        async retrySaveFailed(FileList) {
            return this._saveFileList(FileList);
        }
    }

    // 秒传功能初始化
    let panApiClient = null;
    let tableRowSelector = null;
    let shareLinkManager = null;
    
    // 任务队列系统
    let taskList = [];
    let isTaskRunning = false;
    let taskIdCounter = 0;
    let currentTask = null;
    let isProgressMinimized = false;
    const minimizeWidgetId = 'fastlink-progress-minimize-widget';

    function initFastLink() {
        if (!FastLinkConfig.enabled) return;
        
        panApiClient = new PanApiClient();
        tableRowSelector = new TableRowSelector();
        shareLinkManager = new ShareLinkManager(panApiClient);
        
        // 初始化
        panApiClient.init();
        tableRowSelector.init();
    }

    // =============================================================================
    // 秒传功能模块结束
    // =============================================================================

    // 保存原始方法
    const originalXHR = unsafeWindow.XMLHttpRequest;
    const originalFetch = unsafeWindow.fetch;
    const originalOpen = XMLHttpRequest.prototype.open;
    const originalSend = XMLHttpRequest.prototype.send;
    const originalSetRequestHeader = XMLHttpRequest.prototype.setRequestHeader;

    // 创建唯一标识符
    const requestURLSymbol = Symbol('requestURL');
    const modifiedHeadersSymbol = Symbol('modifiedHeaders');
    const handlerSymbol = Symbol('readyStateHandler');

    // 规则配置
    const rules = [
        {
            // 用户信息
            runat: "end",
            match: (url) => url.pathname.includes('api/user/info'),
            condition: () => user.vip === 1,
            action: (res) => {
                if (!res.data) return res;

                res.data.Vip = true;
                res.data.VipLevel = user.pvip ? 3 : (user.svip ? 2 : 1);

                if (user.ad === 1) res.data.IsShowAdvertisement = false;

                // 确保UserVipDetail存在
                if (!res.data.UserVipDetail) {
                    res.data.UserVipDetail = {};
                }
                res.data.UserVipDetail.VipCode = res.data.VipLevel;

                if (user.pvip === 1) {
                    // 长期会员
                    res.data.VipExpire = "永久有效";
                    res.data.UserVipDetail.UserPermanentVIPDetailInfos = [{
                        VipDesc: "长期VIP会员",
                        TimeDesc: " 永久有效",
                        IsUse: true
                    }];
                    res.data.UserVipDetailInfos = [];
                } else if (user.svip === 1) {
                    // 超级会员
                    let time = new Date(user.endtime * 1000);
                    res.data.VipExpire = time.toLocaleString();
                    res.data.UserVipDetailInfos = [{
                        VipDesc: "SVIP 会员",
                        TimeDesc: time.toLocaleDateString() + " 到期",
                        IsUse: time >= new Date()
                    }];
                } else {
                    // 普通会员
                    let time = new Date(user.endtime * 1000);
                    res.data.VipExpire = time.toLocaleString();
                    res.data.UserVipDetailInfos = [{
                        VipDesc: "VIP 会员",
                        TimeDesc: time.toLocaleDateString() + " 到期",
                        IsUse: time >= new Date()
                    }];
                }

                if (user.name) res.data.Nickname = user.name;
                if (user.photo) res.data.HeadImage = user.photo;
                if (user.mail) res.data.Mail = user.mail;
                if (user.phone) res.data.Passport = Number(user.phone);
                if (user.id) res.data.UID = Number(user.id);
                if (user.level) res.data.GrowSpaceAddCount = Number(user.level);

                return res;
            }
        },
        {
            // 用户报告信息
            runat: "end",
            match: (url) => url.pathname.includes('user/report/info'),
            condition: () => user.vip === 1,
            action: (res) => {
                if (res && res.data) {
                    res.data.vipType = user.pvip ? 3 : (user.svip ? 2 : 1);
                    res.data.vipSub = user.pvip ? 3 : (user.svip ? 2 : 1);
                    res.data.developSub = user.pvip ? 3 : (user.svip ? 2 : 1);
                }
                return res;
            }
        },
        {
            // 下载请求头处理
            runat: "header",
            match: (url) => [
                'file/download_info',
                'file/batch_download_info',
                'share/download/info',
                'file/batch_download_share_info'
            ].some(path => url.pathname.includes(path)),
            condition: () => true,
            action: (headers) => {
                headers.platform = 'android';
                return headers;
            }
        },
        {
            // 下载信息处理
            runat: "end",
            match: (url) => [
                'file/download_info',
                'file/batch_download_info',
                'share/download/info',
                'file/batch_download_share_info'
            ].some(path => url.pathname.includes(path)),
            condition: () => true,
            action: (res, url) => {
                // 处理下载限制错误
                if (res?.code === 5113 || res?.code === 5114 || res?.message?.includes("下载流量已超出")) {
                    if (url.pathname.includes("batch_download")) {
                        showFastLinkToast("请勿多选文件！已为您拦截支付下载窗口", 'warning', 3000);
                        return {
                            code: 400,
                            message: "已拦截",
                            data: null
                        };
                    } else {
                        showFastLinkToast("您今日下载流量已超出限制，已为您拦截支付窗口", 'warning', 3000);
                        return {
                            code: 400,
                            message: "已拦截",
                            data: null
                        };
                    }
                }

                if (res.data && (res.data.DownloadUrl || res.data.DownloadURL)) {
                    // 统一处理下载链接
                    let origKey = res.data.DownloadUrl ? 'DownloadUrl' : 'DownloadURL';
                    let origURL = new URL(res.data[origKey]);
                    let finalURL;

                    if (origURL.origin.includes("web-pro")) {
                        let params = (() => {
                            try {
                                return decodeURIComponent(atob(origURL.searchParams.get('params')));
                            } catch {
                                return atob(origURL.searchParams.get('params'));
                            }
                        })();
                        let directURL = new URL(params, origURL.origin);
                        directURL.searchParams.set('auto_redirect', 0);
                        origURL.searchParams.set('params', btoa(encodeURI(directURL.href)));
                        finalURL = decodeURIComponent(origURL.href);
                    } else {
                        origURL.searchParams.set('auto_redirect', 0);
                        let newURL = new URL('https://web-pro2.123952.com/download-v2/', origURL.origin);
                        newURL.searchParams.set('params', btoa(encodeURI(origURL.href)));
                        newURL.searchParams.set('is_s3', 0);
                        finalURL = decodeURIComponent(newURL.href);
                    }
                    res.data[origKey] = finalURL;
                }

                return res;
            }
        },
        {
            // 屏蔽数据收集请求
            runat: "start",
            match: (url) => url.pathname.includes('web_logs') || url.pathname.includes('metrics'),
            condition: () => true,
            action: () => {
                throw new Error('【123云盘解锁】已屏蔽此数据收集器');
            }
        }
    ];

    // 工具函数
    function findMatchingRule(url, phase) {
        try {
        return rules.find(rule =>
            rule.match(url) &&
            rule.condition() &&
            rule.runat === phase
        );
        } catch (error) {
            console.error('[123云盘解锁] 规则匹配失败:', error);
            if (user.debug) {
                console.error('错误详情:', { url: url.href, phase });
            }
            return null;
        }
    }

    function processData(data) {
        if (typeof data === 'string') {
            try {
                return JSON.parse(data);
            } catch {
                return data;
            }
        }
        return data;
    }

    function debugLog(method, phase, url, original, modified) {
        if (user.debug) {
            console.log(`[123云盘解锁] ${method} ${phase}`, {
                url: url.href,
                original: original,
                modified: modified
            });
        }
    }

    function applyRule(rule, data, url, method, phase) {
        const originalData = processData(data);
        let result = rule.action(originalData, url);

        // 处理header格式化
        if (phase === 'header' && result && typeof result === 'object') {
            const headers = {};
            Object.entries(result).forEach(([key, value]) => {
                const formattedKey = key.toLowerCase()
                    .split('-')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join('-');
                headers[formattedKey] = value;
            });
            result = headers;
        }

        debugLog(method, phase, url, originalData, result);

        // 非header返回字符串
        if (phase !== 'header' && result && typeof result === 'object') {
            return JSON.stringify(result);
        }

        return result;
    }

    // 统一错误处理包装函数
    function safeApplyRule(rule, data, url, method, phase) {
        try {
            return applyRule(rule, data, url, method, phase);
        } catch (error) {
            console.error(`[123云盘解锁] 规则执行失败 [${phase}]:`, error);
            if (user.debug) {
                console.error('错误详情:', {
                    url: url.href,
                    method: method,
                    phase: phase,
                    stack: error.stack
                });
            }
            // 返回原始数据以保证功能不中断
            return data;
        }
    }

    // 修复后的Fetch拦截（带统一错误处理）
    unsafeWindow.fetch = async function (input, init = {}) {
        try {
        const url = new URL(typeof input === 'string' ? input : input.url, location.origin);

        // 检查start规则
        const startRule = findMatchingRule(url, 'start');
        if (startRule) {
            try {
                    const result = safeApplyRule(startRule, null, url, 'fetch', 'start');
                return new Response(result, {
                    status: 200,
                    statusText: 'OK',
                    headers: { 'Content-Type': 'application/json' }
                });
            } catch (error) {
                console.warn('[123云盘解锁] fetch start错误:', error);
                    if (user.debug) {
                        console.error('错误堆栈:', error.stack);
                    }
            }
        }

        // 检查header规则
        const headerRule = findMatchingRule(url, 'header');
        if (headerRule) {
                try {
            if (!init.headers) init.headers = {};

            let headers = {};
            if (init.headers instanceof Headers) {
                init.headers.forEach((value, key) => headers[key] = value);
            } else {
                headers = { ...init.headers };
            }

                    const modifiedHeaders = safeApplyRule(headerRule, headers, url, 'fetch', 'header');
            init.headers = new Headers(modifiedHeaders);
                } catch (error) {
                    console.warn('[123云盘解锁] fetch header错误:', error);
                    if (user.debug) {
                        console.error('错误堆栈:', error.stack);
                    }
                }
        }

        // 执行原始请求
        const response = await originalFetch.call(this, input, init);

        // 检查end规则
        const endRule = findMatchingRule(url, 'end');
        if (endRule) {
            try {
                const responseText = await response.clone().text();
                    const modifiedResponse = safeApplyRule(endRule, responseText, url, 'fetch', 'end');

                return new Response(modifiedResponse, {
                    status: response.status,
                    statusText: response.statusText,
                    headers: response.headers
                });
            } catch (error) {
                console.warn('[123云盘解锁] fetch end错误:', error);
                    if (user.debug) {
                        console.error('错误堆栈:', error.stack);
                    }
            }
        }

        return response;
        } catch (error) {
            console.error('[123云盘解锁] fetch拦截失败:', error);
            if (user.debug) {
                console.error('错误堆栈:', error.stack);
            }
            // 失败时调用原始fetch
            return originalFetch.call(this, input, init);
        }
    };

    // 修复后的XMLHttpRequest拦截（修复内存泄漏）
    XMLHttpRequest.prototype.open = function (method, url, ...args) {
        try {
        const fullUrl = new URL(url, location.origin);
        this[requestURLSymbol] = fullUrl;

            // 移除旧的事件监听器（如果存在）
            if (this[handlerSymbol]) {
                this.removeEventListener('readystatechange', this[handlerSymbol]);
            }

        // 使用箭头函数保持this上下文
        const handleStateChange = () => {
            if (this.readyState === 4) {
                const endRule = findMatchingRule(fullUrl, 'end');
                if (endRule) {
                    try {
                            const modifiedResponse = safeApplyRule(
                            endRule,
                            this.responseText,
                            fullUrl,
                            'XHR',
                            'end'
                        );

                        Object.defineProperty(this, 'responseText', {
                            value: modifiedResponse,
                            writable: false,
                            configurable: true
                        });

                        Object.defineProperty(this, 'response', {
                            value: modifiedResponse,
                            writable: false,
                            configurable: true
                        });
                    } catch (error) {
                            console.warn('[123云盘解锁] XHR响应处理错误:', error);
                            if (user.debug) {
                                console.error('错误堆栈:', error.stack);
                            }
                    }
                }
            }
        };

            // 保存事件处理器引用，以便后续移除
            this[handlerSymbol] = handleStateChange;
        this.addEventListener('readystatechange', handleStateChange);

        return originalOpen.call(this, method, url, ...args);
        } catch (error) {
            console.error('[123云盘解锁] XHR.open错误:', error);
            if (user.debug) {
                console.error('错误堆栈:', error.stack);
            }
            // 失败时调用原始方法
            return originalOpen.call(this, method, url, ...args);
        }
    };

    XMLHttpRequest.prototype.setRequestHeader = function (name, value) {
        try {
        const url = this[requestURLSymbol];
        if (!url) return originalSetRequestHeader.call(this, name, value);

        const headerRule = findMatchingRule(url, 'header');
        if (headerRule) {
                try {
            if (!this[modifiedHeadersSymbol]) this[modifiedHeadersSymbol] = {};
            this[modifiedHeadersSymbol][name] = value;

                    const modifiedHeaders = safeApplyRule(headerRule, this[modifiedHeadersSymbol], url, 'XHR', 'header');
            this[modifiedHeadersSymbol] = modifiedHeaders;
            return;
                } catch (error) {
                    console.warn('[123云盘解锁] XHR header处理错误:', error);
                    if (user.debug) {
                        console.error('错误堆栈:', error.stack);
                    }
                }
        }

        return originalSetRequestHeader.call(this, name, value);
        } catch (error) {
            console.error('[123云盘解锁] XHR.setRequestHeader错误:', error);
            if (user.debug) {
                console.error('错误堆栈:', error.stack);
            }
            // 失败时调用原始方法
            return originalSetRequestHeader.call(this, name, value);
        }
    };

    XMLHttpRequest.prototype.send = function (data) {
        try {
        const url = this[requestURLSymbol];
        if (!url) return originalSend.call(this, data);

        // 应用修改的headers
        const modifiedHeaders = this[modifiedHeadersSymbol];
        if (modifiedHeaders) {
                try {
            Object.entries(modifiedHeaders).forEach(([name, value]) => {
                originalSetRequestHeader.call(this, name, value);
            });
                } catch (error) {
                    console.warn('[123云盘解锁] 应用修改的headers失败:', error);
                    if (user.debug) {
                        console.error('错误堆栈:', error.stack);
                    }
                }
        }

        // 检查start规则
        const startRule = findMatchingRule(url, 'start');
        if (startRule) {
            try {
                    const result = safeApplyRule(startRule, null, url, 'XHR', 'start');

                // 设置响应属性
                Object.defineProperty(this, 'readyState', {
                    value: 4,
                    configurable: true
                });
                Object.defineProperty(this, 'status', {
                    value: 200,
                    configurable: true
                });
                Object.defineProperty(this, 'responseText', {
                    value: result,
                    configurable: true
                });
                Object.defineProperty(this, 'response', {
                    value: result,
                    configurable: true
                });

                // 触发事件
                setTimeout(() => {
                    ['readystatechange', 'load', 'loadend'].forEach(eventType => {
                        try {
                            this.dispatchEvent(new Event(eventType));
                            const handler = this[`on${eventType}`];
                            if (typeof handler === 'function') handler.call(this);
                        } catch (error) {
                            console.warn(`[123云盘解锁] 事件错误 ${eventType}:`, error);
                                if (user.debug) {
                                    console.error('错误堆栈:', error.stack);
                                }
                        }
                    });
                }, 0);

                return;
            } catch (error) {
                    console.warn('[123云盘解锁] XHR start处理错误:', error);
                    if (user.debug) {
                        console.error('错误堆栈:', error.stack);
                    }
            }
        }

        return originalSend.call(this, data);
        } catch (error) {
            console.error('[123云盘解锁] XHR.send错误:', error);
            if (user.debug) {
                console.error('错误堆栈:', error.stack);
            }
            // 失败时调用原始方法
            return originalSend.call(this, data);
        }
    };

    // 格式化设置项
    const formatSetting = (key, value, comment) => {
        const item = document.createElement('div');
        item.className = 'setting-item';

        const content = document.createElement('div');
        content.className = 'setting-content';

        const keyElement = document.createElement('div');
        keyElement.className = 'setting-key';
        keyElement.textContent = key;
        content.appendChild(keyElement);

        // 判断设置类型 - 修复等级1被误判为开关的问题
        const switchKeys = ['VIP状态', 'SVIP显示', '长期会员显示', '广告控制', '秒传功能', '调试模式'];
        const isSwitch = switchKeys.includes(key) && typeof value === 'number' && (value === 0 || value === 1);
        const isEditable = ['用户名', '头像', '等级', '过期时间'].includes(key);

        if (isSwitch) {
            // 创建开关按钮
            const switchContainer = document.createElement('label');
            switchContainer.className = 'switch';

            const input = document.createElement('input');
            input.type = 'checkbox';
            input.checked = value === 1;

            const slider = document.createElement('span');
            slider.className = 'slider round';

            switchContainer.appendChild(input);
            switchContainer.appendChild(slider);

            // 添加点击事件
            input.addEventListener('change', () => {
                let newValue = input.checked ? 1 : 0;
                // 更新用户配置
                switch (key) {
                    case 'VIP状态':
                        user.vip = newValue;
                        GM_setValue('vip', newValue);
                        break;
                    case 'SVIP显示':
                        user.svip = newValue;
                        GM_setValue('svip', newValue);
                        // 如果SVIP关闭，长期会员也应该关闭
                        if (newValue === 0 && user.pvip === 1) {
                            user.pvip = 0;
                            GM_setValue('pvip', 0);
                        }
                        break;
                    case '长期会员显示':
                        user.pvip = newValue;
                        GM_setValue('pvip', newValue);
                        // 如果长期会员开启，SVIP必须开启
                        if (newValue === 1 && user.svip === 0) {
                            user.svip = 1;
                            GM_setValue('svip', 1);
                        }
                        break;
                    case '广告控制':
                        user.ad = newValue;
                        GM_setValue('ad', newValue);
                        break;
                    case '秒传功能':
                        FastLinkConfig.enabled = newValue;
                        GM_setValue('fastlink_enabled', newValue);
                        break;
                    case '调试模式':
                        user.debug = newValue;
                        GM_setValue('debug', newValue);
                        break;
                }

                // 刷新页面以应用更改
                setTimeout(() => location.reload(), 300);
            });

            content.appendChild(switchContainer);
        } else if (isEditable) {
            // 创建输入框
            const inputContainer = document.createElement('div');
            inputContainer.className = 'input-container';

            const inputElement = document.createElement('input');

            // 根据不同的设置项设置输入框类型和属性
            if (key === '等级') {
                inputElement.type = 'number';
                inputElement.min = 0;
                inputElement.max = 128;
                inputElement.value = value;
            } else if (key === '过期时间') {
                inputElement.type = 'datetime-local';
                // 将时间戳转换为datetime-local格式
                const date = new Date(value * 1000);
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const day = String(date.getDate()).padStart(2, '0');
                const hours = String(date.getHours()).padStart(2, '0');
                const minutes = String(date.getMinutes()).padStart(2, '0');
                inputElement.value = `${year}-${month}-${day}T${hours}:${minutes}`;
            } else {
                inputElement.type = 'text';
                inputElement.value = value;
            }

            inputElement.className = 'setting-input';

            // 添加保存按钮
            const saveButton = document.createElement('button');
            saveButton.textContent = '保存';
            saveButton.className = 'save-btn';

            // 保存按钮点击事件
            saveButton.addEventListener('click', () => {
                let newValue = inputElement.value;

                // 验证和转换不同类型的输入
                if (key === '等级') {
                    newValue = parseInt(newValue);
                    if (isNaN(newValue) || newValue < 0 || newValue > 128) {
                        alert('等级必须在 0-128 之间');
                        return;
                    }
                } else if (key === '过期时间') {
                    // 将datetime-local格式转换为时间戳
                    const date = new Date(newValue);
                    if (isNaN(date.getTime())) {
                        alert('请输入有效的日期时间');
                        return;
                    }
                    newValue = Math.floor(date.getTime() / 1000);
                } else if (key === '头像' && newValue && !newValue.match(/^https?:\/\/.+/)) {
                    if (!confirm('头像URL似乎不是有效的HTTP/HTTPS地址，是否继续保存？')) {
                        return;
                    }
                }

                // 更新配置
                switch (key) {
                    case '用户名':
                        user.name = newValue;
                        GM_setValue('name', newValue);
                        break;
                    case '头像':
                        user.photo = newValue;
                        GM_setValue('photo', newValue);
                        break;
                    case '等级':
                        user.level = newValue;
                        GM_setValue('level', newValue);
                        break;
                    case '过期时间':
                        user.endtime = newValue;
                        GM_setValue('endtime', newValue);
                        break;
                }

                // 显示保存成功提示
                saveButton.textContent = '已保存';
                saveButton.classList.add('saved');
                setTimeout(() => {
                    saveButton.textContent = '保存';
                    saveButton.classList.remove('saved');
                    location.reload();
                }, 1500);
            });

            inputContainer.appendChild(inputElement);
            inputContainer.appendChild(saveButton);
            content.appendChild(inputContainer);
        } else {
            // 非编辑项的显示
            const valueElement = document.createElement('div');
            valueElement.className = 'setting-value';
            valueElement.textContent = key === '过期时间' ? new Date(value * 1000).toLocaleString() : value;
            content.appendChild(valueElement);
        }

        item.appendChild(content);

        if (comment) {
            const commentElement = document.createElement('div');
            commentElement.className = 'setting-comment';
            commentElement.textContent = comment;
            item.appendChild(commentElement);
        }

        return item;
    };

    function createSettingsPanel() {
        // 检查是否已存在面板
        if (document.getElementById('vip-settings-panel')) {
            return;
        }

        // 创建面板容器
        const panel = document.createElement('div');
        panel.id = 'vip-settings-panel';
        panel.className = 'settings-panel';

        // 创建标题栏
        const header = document.createElement('div');
        header.className = 'panel-header';

        // 创建标题容器
        const titleContainer = document.createElement('div');
        titleContainer.className = 'title-container';

        const title = document.createElement('h3');
        title.textContent = '123云盘脚本设置';
        titleContainer.appendChild(title);

        // 添加GitHub图标
        const githubIcon = document.createElement('a');
        githubIcon.href = 'https://github.com/QingJ01/123pan_unlock';
        githubIcon.target = '_blank';
        githubIcon.className = 'github-icon';
        githubIcon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges; shape-rendering: geometricPrecision;">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
        `;
        githubIcon.title = '访问GitHub项目';
        titleContainer.appendChild(githubIcon);

        header.appendChild(titleContainer);

        // 添加关闭按钮
        const closeButton = document.createElement('button');
        closeButton.className = 'close-btn';
        closeButton.innerHTML = '&times;';
        closeButton.addEventListener('click', () => panel.remove());
        header.appendChild(closeButton);

        panel.appendChild(header);

        // 创建设置列表
        const settingsList = document.createElement('div');
        settingsList.className = 'settings-list';

        // 添加所有设置项
        const settings = [
            { key: 'VIP状态', value: user.vip, comment: '会员修改总开关' },
            { key: 'SVIP显示', value: user.svip, comment: '显示为超级会员 (关闭将自动关闭长期会员)' },
            { key: '长期会员显示', value: user.pvip, comment: '显示为长期会员 (开启将自动开启 SVIP 显示)' },
            { key: '广告控制', value: user.ad, comment: '关闭广告' },
            { key: '秒传功能', value: FastLinkConfig.enabled, comment: '启用秒传链接生成和保存功能' },
            { key: '用户名', value: user.name, comment: '自定义用户名（支持中文、英文、数字）' },
            { key: '头像', value: user.photo, comment: '自定义头像URL（建议使用HTTPS地址）' },
            { key: '等级', value: user.level, comment: '成长容量等级（0-128，数字越大容量越大）' },
            { key: '过期时间', value: user.endtime, comment: '会员过期时间（可自定义任意时间）' },
            { key: '调试模式', value: user.debug, comment: '调试信息显示级别' }
        ];

        settings.forEach(setting => {
            settingsList.appendChild(formatSetting(setting.key, setting.value, setting.comment));
        });

        panel.appendChild(settingsList);

        // 添加交流群按钮
        const groupButton = document.createElement('a');
        groupButton.href = 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=GGU3-kUsPnz1bq-jwN7e8D41yxZ-DyI2&authKey=ujGsFKDnF5zD3j1z9krJR5xHlWWAKHOJV2oarfAgNmqZAl0xmTb45QwsqgYPPF7e&noverify=0&group_code=1035747022';
        groupButton.target = '_blank';
        groupButton.className = 'group-btn';
        groupButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            <span>加入交流群</span>
        `;
        panel.appendChild(groupButton);

        document.body.appendChild(panel);
    }

    // 秒传功能UI函数
    function showFastLinkToast(message, type = 'info', duration = 3000) {
        const toast = document.createElement('div');
        toast.className = 'fastlink-toast';
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #fff;
            color: #333;
            padding: 12px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 10002;
            font-size: 14px;
            max-width: 300px;
            animation: fastlinkToastSlideIn 0.3s ease-out;
        `;
        
        // 根据类型设置边框颜色
        const borderColors = {
            success: '#4CAF50',
            error: '#f44336',
            warning: '#ff9800',
            info: '#2196F3'
        };
        toast.style.borderLeft = `4px solid ${borderColors[type] || borderColors.info}`;
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'fastlinkToastSlideOut 0.3s ease-out forwards';
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, duration);
    }
    
    function showFastLinkProgress(title, percent, desc) {
        let modal = document.getElementById('fastlink-progress-modal');
        const taskQueueHtml = taskList.length > 0 ? ` - 队列 ${taskList.length}` : '';
        
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'fastlink-progress-modal';
            modal.className = 'fastlink-modal-overlay';
            modal.innerHTML = `
                <div class="fastlink-modal" style="position:relative;">
                    <button id="minimize-progress-btn" style="position:absolute;right:12px;top:12px;width:32px;height:32px;border-radius:50%;background:#ffc504;color:#000;border:none;display:flex;align-items:center;justify-content:center;font-weight:700;cursor:pointer;box-shadow:0 2px 6px rgba(0,0,0,0.15);z-index:10003;transition:all 0.2s ease;" title="最小化">−</button>
                    <h3 id="fastlink-title">${title}${taskQueueHtml}</h3>
                    <div class="fastlink-progress-bar">
                        <div id="fastlink-progress" style="width: ${percent}%"></div>
                    </div>
                    <div id="fastlink-percent">${percent}%</div>
                    <div id="fastlink-desc">${desc}</div>
                </div>
            `;
            document.body.appendChild(modal);
            
            // 绑定最小化按钮
            const minimizeBtn = modal.querySelector('#minimize-progress-btn');
            if (minimizeBtn && !minimizeBtn.dataset.bound) {
                minimizeBtn.dataset.bound = 'true';
                minimizeBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    isProgressMinimized = true;
                    modal.remove();
                    updateMinimizedWidget(title, percent, desc);
                });
            }
        } else {
            modal.querySelector('#fastlink-title').textContent = title + taskQueueHtml;
            modal.querySelector('#fastlink-progress').style.width = percent + '%';
            modal.querySelector('#fastlink-percent').textContent = percent + '%';
            modal.querySelector('#fastlink-desc').textContent = desc;
        }
    }

    function hideFastLinkProgress() {
        const modal = document.getElementById('fastlink-progress-modal');
        if (modal) modal.remove();
        const widget = document.getElementById(minimizeWidgetId);
        if (widget) widget.remove();
        isProgressMinimized = false;
    }

    function showFastLinkCopyModal(shareLink) {
        const fileListHtml = shareLinkManager.fileInfoList.length > 0 ? `
            <div style="max-height:120px;overflow-y:auto;background:rgba(248,249,250,0.7);border-radius:8px;padding:10px;margin-bottom:16px;font-size:13px;">
                <div style='color:#888;margin-bottom:6px;'>文件列表（共${shareLinkManager.fileInfoList.length}个）:</div>
                ${shareLinkManager.fileInfoList.map(f => `<div style='color:#333;word-break:break-all;margin:2px 0;'>${f.path}</div>`).join('')}
            </div>
        ` : '';

        const modal = document.createElement('div');
        modal.className = 'fastlink-modal-overlay';
        modal.id = 'fastlink-copy-modal';
        modal.innerHTML = `
            <div class="fastlink-modal">
                <button class="close-btn" id="close-copy-modal">×</button>
                <h3>🚀 秒传链接</h3>
                ${fileListHtml}
                <textarea id="fastlink-copy-text" placeholder="秒传链接已生成...">${shareLink}</textarea>
                <div style="display: flex; gap: 12px; justify-content: center;">
                    <div class="copy-dropdown" style="position: relative;">
                        <button class="copy-btn" id="copy-main-btn">复制 ▼</button>
                        <div class="copy-dropdown-menu" style="display: none; position: absolute; bottom: 100%; left: 0; background: #fff; border: 1px solid #e1e5e9; border-radius: 10px; box-shadow: 0 4px 16px rgba(0,0,0,0.12); min-width: 120px; z-index: 10001; margin-bottom: 6px; padding: 0;">
                            <div class="copy-dropdown-item" data-type="text">复制纯文本</div>
                            <div class="copy-dropdown-item" data-type="json">复制JSON</div>
                        </div>
                    </div>
                    <button class="export-btn" id="export-json-btn">导出JSON</button>
                    <button class="export-btn" id="close-modal-btn">关闭</button>
                </div>
            </div>
        `;
        
        // 事件绑定
        modal.querySelector('#close-copy-modal').addEventListener('click', () => modal.remove());
        modal.querySelector('#close-modal-btn').addEventListener('click', () => modal.remove());
        
        // 复制按钮和下拉菜单
        const dropdown = modal.querySelector('.copy-dropdown');
        const dropdownMenu = modal.querySelector('.copy-dropdown-menu');
        const mainBtn = modal.querySelector('#copy-main-btn');
        
        mainBtn.addEventListener('click', () => copyContent('text'));
        mainBtn.addEventListener('mouseenter', () => dropdownMenu.style.display = 'block');
        dropdown.addEventListener('mouseleave', () => dropdownMenu.style.display = 'none');
        
        modal.querySelectorAll('.copy-dropdown-item').forEach(item => {
            item.addEventListener('click', () => {
                copyContent(item.dataset.type);
                dropdownMenu.style.display = 'none';
            });
        });
        
        // 导出JSON
        modal.querySelector('#export-json-btn').addEventListener('click', () => exportJson());
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
        document.body.appendChild(modal);
        
        function copyContent(type) {
            const inputField = document.querySelector('#fastlink-copy-text');
            if (!inputField) return;
            
            let contentToCopy = inputField.value;
            
            if (type === 'json') {
                try {
                    const jsonData = shareLinkManager.shareLinkToJson(contentToCopy);
                    contentToCopy = JSON.stringify(jsonData, null, 2);
                } catch (error) {
                    showFastLinkToast('转换JSON失败: ' + error.message, 'error');
                    return;
                }
            }
            
            navigator.clipboard.writeText(contentToCopy).then(() => {
                showFastLinkToast(`已成功复制${type === 'json' ? 'JSON' : '纯文本'}到剪贴板 📋`, 'success');
            }).catch(err => {
                showFastLinkToast(`复制失败: ${err.message || '请手动复制内容'}`, 'error');
            });
        }
        
        function exportJson() {
            const inputField = document.querySelector('#fastlink-copy-text');
            if (!inputField) return;
            
            const shareLink = inputField.value;
            if (!shareLink.trim()) {
                showFastLinkToast('没有内容可导出', 'warning');
                return;
            }
            
            try {
                const jsonData = shareLinkManager.shareLinkToJson(shareLink);
                const jsonContent = JSON.stringify(jsonData, null, 2);
                const filename = getExportFilename(shareLink);
                
                downloadJsonFile(jsonContent, filename);
                showFastLinkToast('JSON文件导出成功 📁', 'success');
            } catch (error) {
                showFastLinkToast('导出失败: ' + error.message, 'error');
            }
        }
        
        function downloadJsonFile(content, filename) {
            const blob = new Blob([content], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }
        
        function getExportFilename(shareLink) {
            if (shareLinkManager.commonPath) {
                const commonPath = shareLinkManager.commonPath.replace(/\/$/, '');
                return `${commonPath}.json`;
            }
            return '秒传链接.json';
        }
    }

    function showFastLinkInputModal() {
        const modal = document.createElement('div');
        modal.className = 'fastlink-modal-overlay';
        modal.id = 'fastlink-input-modal';
        modal.innerHTML = `
            <div class="fastlink-modal">
                <button class="close-btn" id="close-input-modal">×</button>
                <h3>📥 保存秒传文件</h3>
                <textarea id="fastlink-input-text" placeholder="请输入或粘贴秒传链接，或拖入JSON文件..."></textarea>
                <div style="display: flex; gap: 12px; justify-content: center;">
                    <button class="copy-btn" id="fastlink-save-btn">保存</button>
                    <button class="file-input-btn" id="select-file-btn">选择JSON</button>
                    <input type="file" id="json-file-input" accept=".json" style="display: none;">
                    <button class="export-btn" id="cancel-input-btn">取消</button>
                </div>
            </div>
        `;
        
        const textarea = modal.querySelector('#fastlink-input-text');
        const fileInput = modal.querySelector('#json-file-input');
        const selectFileBtn = modal.querySelector('#select-file-btn');
        
        // 文件拖拽功能
        textarea.addEventListener('dragover', (e) => {
            e.preventDefault();
            textarea.style.borderColor = '#4CAF50';
            textarea.style.background = '#f0f8f0';
        });
        
        textarea.addEventListener('dragleave', (e) => {
            e.preventDefault();
            textarea.style.borderColor = '';
            textarea.style.background = '';
        });
        
        textarea.addEventListener('drop', (e) => {
            e.preventDefault();
            textarea.style.borderColor = '';
            textarea.style.background = '';
            
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                readJsonFile(files[0], textarea);
            }
        });
        
        // 文件选择功能
        selectFileBtn.addEventListener('click', () => {
            fileInput.click();
        });
        
        fileInput.addEventListener('change', (e) => {
            const files = e.target.files;
            if (files.length > 0) {
                readJsonFile(files[0], textarea);
            }
        });
        
        // 保存按钮
        modal.querySelector('#fastlink-save-btn').addEventListener('click', async () => {
            const content = textarea.value;
            if (!content.trim()) {
                showFastLinkToast("请输入秒传链接或导入JSON文件", 'warning');
                return;
            }
            modal.remove();
            await addAndRunTask('save', { content });
        });
        
        // 关闭按钮
        modal.querySelector('#close-input-modal').addEventListener('click', () => modal.remove());
        modal.querySelector('#cancel-input-btn').addEventListener('click', () => modal.remove());
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
        document.body.appendChild(modal);
        
        setTimeout(() => {
            if (textarea) textarea.focus();
        }, 100);
        
        function readJsonFile(file, textarea) {
            if (!file.name.toLowerCase().endsWith('.json')) {
                showFastLinkToast('请选择JSON文件', 'warning');
                return;
            }
            
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const jsonContent = e.target.result;
                    const jsonData = JSON.parse(jsonContent);
                    
                    if (shareLinkManager.validateJson(jsonData)) {
                        textarea.value = jsonContent;
                        showFastLinkToast('JSON文件导入成功 ✅', 'success');
                    } else {
                        showFastLinkToast('无效的JSON格式', 'error');
                    }
                } catch (error) {
                    showFastLinkToast('JSON文件解析失败: ' + error.message, 'error');
                }
            };
            reader.readAsText(file);
        }
    }

    function showFastLinkResult(result) {
        const totalCount = result.success.length + result.failed.length;
        const successCount = result.success.length;
        const failedCount = result.failed.length;
        
        const failedListHtml = failedCount > 0 ? `
            <div style="margin-top: 12px; color: #f44336; font-size: 14px;">
                <div style="margin-bottom: 6px;">失败文件列表：</div>
                <div style="max-height: 160px; overflow-y: auto; background: rgba(245,245,245,0.7); border-radius: 6px; padding: 8px;">
                    ${result.failed.map(fileInfo => `<div style="font-size: 13px; margin: 2px 0;">${fileInfo.fileName} ${fileInfo.error ? `<span style="color: #f44336;">(${fileInfo.error})</span>` : ''}</div>`).join('')}
                </div>
            </div>
        ` : '';

        const modal = document.createElement('div');
        modal.className = 'fastlink-modal-overlay';
        modal.id = 'fastlink-result-modal';
        modal.innerHTML = `
            <div class="fastlink-modal">
                <button class="close-btn" id="close-result-modal">×</button>
                <h3>📊 保存结果</h3>
                <div style="margin: 20px 0;">
                    <div style="font-size: 16px; margin-bottom: 12px;">
                        <span style="color: #666;">总计：</span><strong>${totalCount}</strong> 个文件
                    </div>
                    <div style="font-size: 16px; margin-bottom: 8px; color: #4CAF50;">
                        ✅ 成功：<strong>${successCount}</strong> 个
                    </div>
                    <div style="font-size: 16px; margin-bottom: 8px; color: ${failedCount > 0 ? '#f44336' : '#666'};">
                        ${failedCount > 0 ? '❌' : '✅'} 失败：<strong>${failedCount}</strong> 个
                    </div>
                    ${failedListHtml}
                </div>
                <div style="display: flex; gap: 12px; justify-content: center;">
                    <button class="copy-btn" id="confirm-result-btn">确定</button>
                    ${failedCount > 0 ? `
                        <div class="copy-dropdown" style="position: relative;">
                            <button class="file-input-btn" id="retry-btn">重试失败 ▼</button>
                            <div class="copy-dropdown-menu" style="display: none; position: absolute; bottom: 100%; left: 0; background: #fff; border: 1px solid #e1e5e9; border-radius: 10px; box-shadow: 0 4px 16px rgba(0,0,0,0.12); min-width: 120px; z-index: 10001; margin-bottom: 6px; padding: 0;">
                                <div class="copy-dropdown-item" data-action="retry">重试失败</div>
                                <div class="copy-dropdown-item" data-action="export">导出失败链接</div>
                            </div>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
        
        // 事件绑定
        modal.querySelector('#close-result-modal').addEventListener('click', () => modal.remove());
        modal.querySelector('#confirm-result-btn').addEventListener('click', () => modal.remove());
        
        // 重试按钮和下拉菜单
        if (failedCount > 0) {
            const dropdown = modal.querySelector('.copy-dropdown');
            const dropdownMenu = modal.querySelector('.copy-dropdown-menu');
            const retryBtn = modal.querySelector('#retry-btn');
            
            retryBtn.addEventListener('click', () => {
                modal.remove();
                addAndRunTask('retry', { fileList: result.failed });
            });
            
            retryBtn.addEventListener('mouseenter', () => dropdownMenu.style.display = 'block');
            dropdown.addEventListener('mouseleave', () => dropdownMenu.style.display = 'none');
            
            modal.querySelectorAll('.copy-dropdown-item').forEach(item => {
                item.addEventListener('click', () => {
                    const action = item.dataset.action;
                    if (action === 'retry') {
                        modal.remove();
                        addAndRunTask('retry', { fileList: result.failed });
                    } else if (action === 'export') {
                        const shareLink = shareLinkManager.buildShareLink(result.failed, result.commonPath || '');
                        modal.remove();
                        showFastLinkCopyModal(shareLink);
                    }
                    dropdownMenu.style.display = 'none';
                });
            });
        }
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
        document.body.appendChild(modal);
    }

    async function executeGenerateShareLink() {
        if (!shareLinkManager) {
            console.error('[123云盘解锁] shareLinkManager未初始化');
            alert('秒传功能未启用');
            return;
        }
        
        if (!tableRowSelector) {
            console.error('[123云盘解锁] tableRowSelector未初始化');
            alert('文件选择器未初始化');
            return;
        }
        
        const fileSelection = tableRowSelector.getSelection();
        
        if (!fileSelection.isSelectAll && fileSelection.selectedRowKeys.length === 0) {
            showFastLinkToast('请先选择文件', 'warning');
            return;
        }

        shareLinkManager.progress = 0;
        const poll = setInterval(() => {
            updateFastLinkProgress("生成秒传链接", shareLinkManager.progress, shareLinkManager.progressDesc);
            if (shareLinkManager.progress >= 100) {
                clearInterval(poll);
            }
        }, 500);

        const shareLink = await shareLinkManager.generateShareLink(fileSelection);
        shareLinkManager.taskCancel = false;
        clearInterval(poll);
        hideFastLinkProgress();
        
        if (!shareLink) {
            showFastLinkToast("没有选择文件", 'warning');
            return;
        }
        showFastLinkCopyModal(shareLink);
    }

    async function executeSaveShareLink(content, retry = false) {
        if (!shareLinkManager) {
            alert('秒传功能未启用');
            return;
        }

        shareLinkManager.progress = 0;
        const poll = setInterval(() => {
            updateFastLinkProgress("保存秒传文件", shareLinkManager.progress, shareLinkManager.progressDesc);
            if (shareLinkManager.progress >= 100) {
                clearInterval(poll);
            }
        }, 100);

        let result;
        if (retry) {
            result = await shareLinkManager.retrySaveFailed(content);
        } else {
            result = await shareLinkManager.saveShareLink(content);
        }
        
        shareLinkManager.taskCancel = false;
        clearInterval(poll);
        hideFastLinkProgress();
        showFastLinkResult(result);
        
        // 刷新文件列表
        try {
            const renewButton = document.querySelector('.layout-operate-icon.mfy-tooltip svg');
            if (renewButton) {
                renewButton.click();
            }
        } catch(e) {}
    }

    // 任务队列系统
    function addAndRunTask(taskType, params = {}) {
        const taskId = ++taskIdCounter;
        
        if (taskType === 'generate') {
            const fileSelectInfo = tableRowSelector.getSelection();
            if (!fileSelectInfo || (!fileSelectInfo.isSelectAll && fileSelectInfo.selectedRowKeys.length === 0)) {
                showFastLinkToast("请先选择文件", 'warning');
                return;
            }
            taskList.push({ id: taskId, type: 'generate', params: { fileSelectInfo } });
        } else if (taskType === 'save') {
            taskList.push({ id: taskId, type: 'save', params: { content: params.content } });
        } else if (taskType === 'retry') {
            taskList.push({ id: taskId, type: 'retry', params: { fileList: params.fileList } });
        }
        
        runNextTask();
    }

    function runNextTask() {
        if (isTaskRunning) {
            return;
        }
        
        if (taskList.length === 0) {
            return;
        }

        const task = taskList[0];
        currentTask = task;
        isTaskRunning = true;
        
        setTimeout(async () => {
            try {
                if (task.type === 'generate') {
                    await executeGenerateShareLink();
                } else if (task.type === 'save') {
                    await executeSaveShareLink(task.params.content);
                } else if (task.type === 'retry') {
                    await executeSaveShareLink(task.params.fileList, true);
                }
            } catch (error) {
                console.error('[123云盘解锁] 任务执行失败:', error);
                showFastLinkToast('任务执行失败: ' + error.message, 'error');
            }
            
            isTaskRunning = false;
            taskList = taskList.filter(t => t.id !== task.id);
            currentTask = null;
            
            runNextTask();
        }, 100);
    }

    function cancelCurrentTask() {
        if (shareLinkManager) {
            shareLinkManager.taskCancel = true;
        }
        return true;
    }

    function updateFastLinkProgress(title, percent, desc) {
        if (isProgressMinimized) {
            updateMinimizedWidget(title, percent, desc);
        } else {
            showFastLinkProgress(title, percent, desc);
        }
    }

    function updateMinimizedWidget(title, percent, desc) {
        let widget = document.getElementById(minimizeWidgetId);
        const taskCountHtml = taskList.length > 0 ? 
            `<div style="position:absolute;left:-8px;top:-8px;width:22px;height:22px;background:#f44336;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;z-index:2;box-shadow:0 2px 6px rgba(0,0,0,0.12);">${taskList.length}</div>` : '';
        
        const html = `
            ${taskCountHtml}
            <div style="flex:1;">
                <div style="font-size:12px;color:#333;margin-bottom:6px;">${title}${taskList.length > 0 ? ` - 队列 ${taskList.length}` : ''}</div>
                <div style="height:8px;background:#eee;border-radius:6px;overflow:hidden;">
                    <div style="height:100%;background:#4CAF50;width:${percent}%;transition:width 0.2s;"></div>
                </div>
            </div>
            <div style="font-size:12px;color:#666;width:36px;text-align:right;">${Math.ceil(percent)}%</div>
        `;
        
        if (!widget) {
            widget = document.createElement('div');
            widget.id = minimizeWidgetId;
            widget.style = 'position:fixed;right:20px;bottom:20px;width:220px;background:#fff;border-radius:12px;box-shadow:0 8px 24px rgba(0,0,0,0.18);padding:10px 12px;z-index:10005;display:flex;align-items:center;gap:10px;cursor:pointer;';
            widget.innerHTML = html;
            widget.addEventListener('click', () => {
                isProgressMinimized = false;
                widget.remove();
                updateFastLinkProgress(title, percent, desc);
            });
            document.body.appendChild(widget);
        } else {
            widget.innerHTML = html;
        }
    }

    function addFastLinkButton() {
        if (!FastLinkConfig.enabled) {
            return;
        }
        
        const checkAndAddButton = () => {
            const existingButton = document.getElementById('fastlink-trigger');
            if (existingButton && document.body.contains(existingButton)) {
                return;
            }
            
            const isFilePage = window.location.pathname === "/" && 
                              !window.location.search.includes("sharekey=") && 
                              !window.location.pathname.includes("/account");
            if (!isFilePage) {
                return;
            }
            
            if (!document.body) {
                return;
            }

            const trigger = document.createElement('button');
            trigger.id = 'fastlink-trigger';
            trigger.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024" fill="currentColor">
                    <path d="M395.765333 586.570667h-171.733333c-22.421333 0-37.888-22.442667-29.909333-43.381334L364.768 95.274667A32 32 0 0 1 394.666667 74.666667h287.957333c22.72 0 38.208 23.018667 29.632 44.064l-99.36 243.882666h187.050667c27.509333 0 42.186667 32.426667 24.042666 53.098667l-458.602666 522.56c-22.293333 25.408-63.626667 3.392-54.976-29.28l85.354666-322.421333z"/>
                </svg>
            `;
            
            trigger.addEventListener('click', (e) => {
                toggleFastLinkMenu(e);
            });
            
            document.body.appendChild(trigger);

            // 添加下拉菜单
            const menu = document.createElement('div');
            menu.id = 'fastlink-menu';
            menu.className = 'fastlink-menu';
            menu.innerHTML = `
                <div class="fastlink-menu-item" data-action="generate">生成秒传链接</div>
                <div class="fastlink-menu-item" data-action="save">保存秒传文件</div>
            `;
            menu.querySelectorAll('.fastlink-menu-item').forEach(item => {
                item.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const action = item.dataset.action;
                    menu.style.display = 'none';
                    if (action === 'generate') {
                        addAndRunTask('generate');
                    } else if (action === 'save') {
                        showFastLinkInputModal();
                    }
                });
            });
            document.body.appendChild(menu);
        };

        // 立即尝试添加按钮
        checkAndAddButton();
        
        // 定期检查按钮是否还在
        setInterval(() => {
            const btn = document.getElementById('fastlink-trigger');
            const isFilePage = window.location.pathname === "/" && 
                              !window.location.search.includes("sharekey=") && 
                              !window.location.pathname.includes("/account");
            if (isFilePage && (!btn || !document.body.contains(btn))) {
                checkAndAddButton();
            }
        }, 3000);
    }

    function toggleFastLinkMenu(e) {
        e.stopPropagation();
        const menu = document.getElementById('fastlink-menu');
        if (!menu) {
            return;
        }
        
        const trigger = document.getElementById('fastlink-trigger');
        const rect = trigger.getBoundingClientRect();
        
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.right = (window.innerWidth - rect.right) + 'px';
            menu.style.bottom = (window.innerHeight - rect.top + 5) + 'px';
            menu.style.left = 'auto';
            menu.style.display = 'block';
        }
    }

    function addTriggerButton() {
        const trigger = document.createElement('button');
        trigger.id = 'settings-trigger';
        trigger.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
        `;
        trigger.addEventListener('click', createSettingsPanel);
        document.body.appendChild(trigger);
    }

    // 添加样式 - 修复版本
    function addStyles() {
        // 先移除可能存在的旧样式
        const existingStyle = document.getElementById('vip-settings-style');
        if (existingStyle) {
            existingStyle.remove();
        }

        const style = document.createElement('style');
        style.id = 'vip-settings-style';
        style.textContent = `
            /* 全局样式 */
            .settings-panel {
                position: fixed !important;
                top: 50% !important;
                left: 50% !important;
                transform: translate(-50%, -50%) !important;
                background: rgba(255, 255, 255, 0.95) !important;
                backdrop-filter: blur(20px) !important;
                -webkit-backdrop-filter: blur(20px) !important;
                border: 1px solid rgba(255, 255, 255, 0.2) !important;
                border-radius: 16px !important;
                box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1) inset !important;
                z-index: 10000 !important;
                width: 90% !important;
                max-width: 500px !important;
                max-height: 80vh !important;
                overflow: hidden !important;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif !important;
                color: #333 !important;
                animation: panelFadeIn 0.3s ease !important;
                -webkit-font-smoothing: antialiased !important;
                -moz-osx-font-smoothing: grayscale !important;
                text-rendering: optimizeLegibility !important;
            }
            
            @keyframes panelFadeIn {
                from { opacity: 0; transform: translate(-50%, -48%); }
                to { opacity: 1; transform: translate(-50%, -50%); }
            }
            
            .panel-header {
                display: flex !important;
                justify-content: space-between !important;
                align-items: center !important;
                padding: 16px 20px !important;
                border-bottom: 1px solid rgba(238, 238, 238, 0.6) !important;
                background: rgba(248, 249, 250, 0.8) !important;
                backdrop-filter: blur(10px) !important;
                -webkit-backdrop-filter: blur(10px) !important;
                border-radius: 16px 16px 0 0 !important;
            }
            
            .title-container {
                display: flex !important;
                align-items: center !important;
                gap: 10px !important;
                -webkit-font-smoothing: antialiased !important;
                -moz-osx-font-smoothing: grayscale !important;
            }
            
            .panel-header h3 {
                margin: 0 !important;
                font-size: 18px !important;
                font-weight: 600 !important;
                color: #1a73e8 !important;
                text-rendering: optimizeLegibility !important;
                -webkit-font-smoothing: antialiased !important;
                -moz-osx-font-smoothing: grayscale !important;
                letter-spacing: 0.01em !important;
            }
            
            .github-icon {
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                width: 30px !important;
                height: 30px !important;
                background: rgba(26, 115, 232, 0.1) !important;
                border: 1px solid rgba(26, 115, 232, 0.2) !important;
                border-radius: 6px !important;
                color: #1a73e8 !important;
                text-decoration: none !important;
                transition: all 0.3s ease !important;
                backdrop-filter: blur(5px) !important;
                -webkit-backdrop-filter: blur(5px) !important;
                image-rendering: -webkit-optimize-contrast !important;
                image-rendering: crisp-edges !important;
                shape-rendering: geometricPrecision !important;
            }
            
            .github-icon:hover {
                background: rgba(26, 115, 232, 0.15) !important;
                border-color: rgba(26, 115, 232, 0.4) !important;
                transform: scale(1.05) !important;
                color: #1557b0 !important;
            }
            
            .close-btn {
                background: none !important;
                border: none !important;
                font-size: 24px !important;
                cursor: pointer !important;
                color: #70757a !important;
                padding: 0 !important;
                width: 30px !important;
                height: 30px !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                border-radius: 50% !important;
                transition: background 0.2s !important;
            }
            
            .close-btn:hover {
                background: #f1f3f4 !important;
                color: #d93025 !important;
            }
            
            .settings-list {
                padding: 16px 20px !important;
                overflow-y: auto !important;
                max-height: calc(80vh - 180px) !important;
                padding-bottom: 20px !important;
            }
            
            .setting-item {
                margin-bottom: 16px !important;
                padding: 12px !important;
                background: rgba(248, 249, 250, 0.7) !important;
                backdrop-filter: blur(5px) !important;
                -webkit-backdrop-filter: blur(5px) !important;
                border-radius: 12px !important;
                border: 1px solid rgba(232, 234, 237, 0.6) !important;
                transition: all 0.3s ease !important;
            }
            
            .setting-item:hover {
                background: rgba(248, 249, 250, 0.9) !important;
                border-color: rgba(26, 115, 232, 0.3) !important;
                transform: translateY(-1px) !important;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08) !important;
            }
            
            .setting-content {
                display: flex !important;
                justify-content: space-between !important;
                align-items: center !important;
                margin-bottom: 8px !important;
            }
            
            .setting-key {
                font-weight: 500 !important;
                flex: 1 !important;
            }
            
            .setting-value {
                color: #1a73e8 !important;
                font-weight: 500 !important;
                text-align: right !important;
            }
            
            .setting-comment {
                font-size: 12px !important;
                color: #70757a !important;
                line-height: 1.4 !important;
            }
            
            /* 开关样式 */
            .switch {
                position: relative !important;
                display: inline-block !important;
                width: 40px !important;
                height: 20px !important;
            }
            
            .switch input {
                opacity: 0 !important;
                width: 0 !important;
                height: 0 !important;
            }
            
            .slider {
                position: absolute !important;
                cursor: pointer !important;
                top: 0 !important;
                left: 0 !important;
                right: 0 !important;
                bottom: 0 !important;
                background-color: #ccc !important;
                transition: .3s !important;
            }
            
            .slider:before {
                position: absolute !important;
                content: "" !important;
                height: 16px !important;
                width: 16px !important;
                left: 2px !important;
                bottom: 2px !important;
                background-color: white !important;
                transition: .3s !important;
            }
            
            input:checked + .slider {
                background-color: #1a73e8 !important;
            }
            
            input:checked + .slider:before {
                transform: translateX(20px) !important;
            }
            
            .slider.round {
                border-radius: 34px !important;
            }
            
            .slider.round:before {
                border-radius: 50% !important;
            }
            
            /* 输入框和按钮样式 */
            .input-container {
                display: flex !important;
                gap: 8px !important;
            }
            
            .setting-input {
                padding: 6px 10px !important;
                border: 1px solid #dadce0 !important;
                border-radius: 4px !important;
                font-size: 14px !important;
                flex: 1 !important;
                min-width: 0 !important;
            }
            
            .setting-input:focus {
                outline: none !important;
                border-color: #1a73e8 !important;
            }
            
            .save-btn {
                padding: 6px 12px !important;
                background: #1a73e8 !important;
                color: white !important;
                border: none !important;
                border-radius: 4px !important;
                cursor: pointer !important;
                font-size: 12px !important;
                transition: background 0.2s !important;
                white-space: nowrap !important;
            }
            
            .save-btn:hover {
                background: #1557b0 !important;
            }
            
            .save-btn.saved {
                background: #188038 !important;
            }
            
            /* 交流群按钮 */
            .group-btn {
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                gap: 8px !important;
                position: sticky !important;
                bottom: 0 !important;
                margin: 8px 20px 20px 20px !important;
                padding: 12px 16px !important;
                background: linear-gradient(135deg, rgba(26, 115, 232, 0.9), rgba(21, 87, 176, 0.9)) !important;
                backdrop-filter: blur(15px) !important;
                -webkit-backdrop-filter: blur(15px) !important;
                color: white !important;
                border: 1px solid rgba(255, 255, 255, 0.2) !important;
                border-radius: 12px !important;
                cursor: pointer !important;
                text-decoration: none !important;
                font-weight: 500 !important;
                transition: all 0.3s ease !important;
                box-shadow: 0 4px 12px rgba(26, 115, 232, 0.2), 0 -2px 10px rgba(0, 0, 0, 0.1) !important;
                z-index: 10 !important;
            }
            
            .group-btn:hover {
                transform: translateY(-2px) !important;
                box-shadow: 0 8px 20px rgba(26, 115, 232, 0.4), 0 -4px 15px rgba(0, 0, 0, 0.15) !important;
                background: linear-gradient(135deg, rgba(26, 115, 232, 1), rgba(21, 87, 176, 1)) !important;
            }
            
            /* 触发按钮 */
            #settings-trigger {
                position: fixed !important;
                bottom: 20px !important;
                right: 20px !important;
                width: 54px !important;
                height: 54px !important;
                background: rgba(26, 115, 232, 0.9) !important;
                backdrop-filter: blur(15px) !important;
                -webkit-backdrop-filter: blur(15px) !important;
                color: white !important;
                border: 1px solid rgba(255, 255, 255, 0.2) !important;
                border-radius: 50% !important;
                cursor: pointer !important;
                z-index: 9999 !important;
                box-shadow: 0 6px 20px rgba(26, 115, 232, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                transition: all 0.3s ease !important;
            }
            
            #settings-trigger:hover {
                background: rgba(21, 87, 176, 0.95) !important;
                transform: scale(1.05) rotate(90deg) !important;
                box-shadow: 0 8px 25px rgba(26, 115, 232, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2) inset !important;
            }
            
                /* 响应式设计 */
                @media (max-width: 600px) {
                    .settings-panel {
                        width: 95% !important;
                        max-height: 85vh !important;
                    }
                    
                    .panel-header {
                        padding: 14px 16px !important;
                    }
                    
                    .settings-list {
                        padding: 12px 16px !important;
                        max-height: calc(85vh - 160px) !important;
                        padding-bottom: 16px !important;
                    }
                    
                    .setting-content {
                        flex-direction: column !important;
                        align-items: flex-start !important;
                        gap: 8px !important;
                    }
                    
                    .input-container {
                        width: 100% !important;
                    }
                    
                    .group-btn {
                        margin: 8px 16px 16px 16px !important;
                        padding: 10px 14px !important;
                    }
                    
                    .title-container {
                        gap: 8px !important;
                    }
                    
                    .github-icon {
                        width: 28px !important;
                        height: 28px !important;
                    }
                    
                    .github-icon svg {
                        width: 18px !important;
                        height: 18px !important;
                    }
                    
                    #settings-trigger {
                        bottom: 16px !important;
                        right: 16px !important;
                        width: 44px !important;
                        height: 44px !important;
                    }
                }
                
                /* 秒传功能样式 */
                #fastlink-trigger {
                    position: fixed !important;
                    bottom: 90px !important;
                    right: 20px !important;
                    width: 54px !important;
                    height: 54px !important;
                    background: rgba(76, 175, 80, 0.9) !important;
                    backdrop-filter: blur(15px) !important;
                    -webkit-backdrop-filter: blur(15px) !important;
                    color: white !important;
                    border: 1px solid rgba(255, 255, 255, 0.2) !important;
                    border-radius: 50% !important;
                    cursor: pointer !important;
                    z-index: 9999 !important;
                    box-shadow: 0 6px 20px rgba(76, 175, 80, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    transition: all 0.3s ease !important;
                }
                
                #fastlink-trigger:hover {
                    background: rgba(67, 160, 71, 0.95) !important;
                    transform: scale(1.05) !important;
                    box-shadow: 0 8px 25px rgba(76, 175, 80, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2) inset !important;
                }
                
                .fastlink-menu {
                    position: fixed !important;
                    display: none;
                    background: rgba(255, 255, 255, 0.95) !important;
                    backdrop-filter: blur(15px) !important;
                    -webkit-backdrop-filter: blur(15px) !important;
                    border: 1px solid rgba(0, 0, 0, 0.1) !important;
                    border-radius: 10px !important;
                    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15) !important;
                    overflow: hidden !important;
                    z-index: 10000 !important;
                    min-width: 140px !important;
                }
                
                .fastlink-menu-item {
                    padding: 12px 16px !important;
                    cursor: pointer !important;
                    font-size: 14px !important;
                    color: #333 !important;
                    transition: all 0.2s !important;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.05) !important;
                }
                
                .fastlink-menu-item:last-child {
                    border-bottom: none !important;
                }
                
                .copy-dropdown {
                    position: relative;
                    display: inline-block;
                }
                
                .copy-dropdown-menu {
                    position: absolute;
                    background: #fff;
                    border: 1px solid #e1e5e9;
                    border-radius: 10px;
                    box-shadow: 0 4px 16px rgba(0,0,0,0.12);
                    min-width: 120px;
                    z-index: 10001;
                    padding: 0;
                }
                
                .copy-dropdown:hover .copy-dropdown-menu {
                    display: block !important;
                }
                
                .copy-dropdown-item {
                    padding: 10px 18px;
                    cursor: pointer;
                    font-size: 14px;
                    border-bottom: 1px solid #f0f0f0;
                    background: #fff;
                    transition: background 0.2s;
                }
                
                .copy-dropdown-item:first-child {
                    border-radius: 10px 10px 0 0;
                }
                
                .copy-dropdown-item:last-child {
                    border-bottom: none;
                    border-radius: 0 0 10px 10px;
                }
                
                .copy-dropdown-item:hover {
                    background: #e8f5e9;
                    color: #388e3c;
                }
                
                .copy-btn {
                    background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
                    color: white;
                    border: none;
                    padding: 14px 24px;
                    cursor: pointer;
                    border-radius: 8px;
                    font-size: 16px;
                    font-weight: 500;
                    min-width: 100px;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
                }
                
                .copy-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(76, 175, 80, 0.4);
                }
                
                .copy-btn:active {
                    transform: translateY(0);
                    box-shadow: 0 2px 8px rgba(76, 175, 80, 0.3);
                }
                
                .export-btn {
                    background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);
                    color: white;
                    border: none;
                    padding: 14px 24px;
                    cursor: pointer;
                    border-radius: 8px;
                    font-size: 16px;
                    font-weight: 500;
                    min-width: 100px;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 12px rgba(33, 150, 243, 0.3);
                }
                
                .export-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(33, 150, 243, 0.4);
                }
                
                .export-btn:active {
                    transform: translateY(0);
                    box-shadow: 0 2px 8px rgba(33, 150, 243, 0.3);
                }
                
                .file-input-btn {
                    background: linear-gradient(135deg, #FF9800 0%, #F57C00 100%);
                    color: white;
                    border: none;
                    padding: 14px 24px;
                    cursor: pointer;
                    border-radius: 8px;
                    font-size: 16px;
                    font-weight: 500;
                    min-width: 100px;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 12px rgba(255, 152, 0, 0.3);
                }
                
                .file-input-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(255, 152, 0, 0.4);
                }
                
                .file-input-btn:active {
                    transform: translateY(0);
                    box-shadow: 0 2px 8px rgba(255, 152, 0, 0.3);
                }
                
                .close-btn {
                    position: absolute;
                    top: 16px;
                    right: 16px;
                    background: transparent;
                    border: none;
                    font-size: 24px;
                    color: #999;
                    cursor: pointer;
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s ease;
                }
                
                .close-btn:hover {
                    background: rgba(244, 67, 54, 0.1);
                    color: #f44336;
                    transform: scale(1.1);
                }
                
                .fastlink-menu-item:hover {
                    background: rgba(76, 175, 80, 0.1) !important;
                    color: #4CAF50 !important;
                }
                
                @keyframes fastlinkToastSlideIn {
                    from {
                        transform: translateX(400px);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                
                @keyframes fastlinkToastSlideOut {
                    from {
                        transform: translateX(0);
                        opacity: 1;
                    }
                    to {
                        transform: translateX(400px);
                        opacity: 0;
                    }
                }
                
                .fastlink-modal-overlay {
                    display: flex !important;
                    position: fixed !important;
                    top: 0 !important;
                    left: 0 !important;
                    width: 100% !important;
                    height: 100% !important;
                    background: rgba(0, 0, 0, 0.6) !important;
                    backdrop-filter: blur(4px) !important;
                    justify-content: center !important;
                    align-items: center !important;
                    z-index: 10000 !important;
                    animation: fadeIn 0.3s ease-out !important;
                }
                
                .fastlink-modal {
                    background: rgba(255, 255, 255, 0.95) !important;
                    backdrop-filter: blur(20px) !important;
                    -webkit-backdrop-filter: blur(20px) !important;
                    padding: 32px !important;
                    border-radius: 16px !important;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15) !important;
                    text-align: center !important;
                    width: 480px !important;
                    max-width: 90vw !important;
                    max-height: 90vh !important;
                    overflow: hidden !important;
                    position: relative !important;
                    border: 1px solid rgba(255, 255, 255, 0.2) !important;
                }
                
                .fastlink-modal h3 {
                    margin: 0 0 20px 0 !important;
                    font-size: 20px !important;
                    color: #333 !important;
                }
                
                .fastlink-modal textarea {
                    width: 100% !important;
                    padding: 16px !important;
                    margin: 0 0 24px 0 !important;
                    border: 2px solid #e1e5e9 !important;
                    border-radius: 12px !important;
                    resize: vertical !important;
                    min-height: 120px !important;
                    font-family: 'Consolas', 'Monaco', 'Courier New', monospace !important;
                    font-size: 14px !important;
                    line-height: 1.5 !important;
                    background: rgba(250, 251, 252, 0.7) !important;
                    transition: all 0.3s ease !important;
                    box-sizing: border-box !important;
                    outline: none !important;
                }
                
                .fastlink-modal textarea:focus {
                    border-color: #4CAF50 !important;
                    background: rgba(255, 255, 255, 0.9) !important;
                    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1) !important;
                }
                
                .fastlink-progress-bar {
                    background: #eee !important;
                    border-radius: 8px !important;
                    overflow: hidden !important;
                    height: 18px !important;
                    margin: 20px 0 !important;
                }
                
                #fastlink-progress {
                    background: linear-gradient(90deg, #4CAF50, #66BB6A) !important;
                    height: 100% !important;
                    transition: width 0.3s !important;
                }
                
                #fastlink-title {
                    margin-bottom: 16px !important;
                    font-size: 18px !important;
                    color: #333 !important;
                    word-wrap: break-word !important;
                    word-break: break-all !important;
                    white-space: pre-wrap !important;
                    line-height: 1.4 !important;
                }
                
                #fastlink-percent {
                    margin: 8px 0 !important;
                    font-size: 14px !important;
                    color: #666 !important;
                    font-weight: 500 !important;
                }
                
                #fastlink-desc {
                    margin-top: 8px !important;
                    font-size: 13px !important;
                    color: #888 !important;
                    word-wrap: break-word !important;
                    word-break: break-all !important;
                    white-space: pre-wrap !important;
                    line-height: 1.4 !important;
                    min-height: 20px !important;
                }
        `;
        document.head.appendChild(style);
    }

    // 注册菜单命令
    GM_registerMenuCommand('⚙️ 打开设置面板', createSettingsPanel);

    // 等待页面加载完成
    function waitForBody() {
        if (document.body) {
            addStyles(); // 先添加样式
            addTriggerButton(); // 添加设置按钮
            
            // 初始化秒传功能
            if (FastLinkConfig.enabled) {
                initFastLink();
                addFastLinkButton(); // 添加秒传按钮
                
                // 点击其他地方关闭菜单
                document.addEventListener('click', (e) => {
                    const menu = document.getElementById('fastlink-menu');
                    const trigger = document.getElementById('fastlink-trigger');
                    if (menu && trigger && !trigger.contains(e.target) && !menu.contains(e.target)) {
                        menu.style.display = 'none';
                    }
                });
                
                console.log('[123云盘解锁] 秒传菜单关闭监听器已添加');
            }
        } else {
            setTimeout(waitForBody, 100);
        }
    }

    // 页面加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', waitForBody);
    } else {
        waitForBody();
    }

    // 输出版本信息
    console.log('[123云盘解锁+秒传] v1.2.0 已加载完成');
    if (FastLinkConfig.enabled) {
        console.log('[123云盘解锁] 秒传功能已启用');
    }
})();
