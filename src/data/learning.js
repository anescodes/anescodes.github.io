export const learningData = [
  {
    id: "linear-regression",
    title: "Introduction to Linear Regression",
    category: "Machine Learning",
    type: "Course",
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    summary: "Supervised learning algorithm used to model continuous relationships between features and target values.",
    introduction: "Linear regression is a fundamental algorithm in machine learning that computes a linear mapping between input features and target outputs.",
    sections: [
      {
        heading: "1. The Model",
        paragraphs: ["Linear regression predicts outputs using a straight line fit over input features."],
        equation: "ŷ = wx + b",
        paragraphs2: ["Where w is the weight parameter, b is the bias term, and ŷ is the output estimate."]
      },
      {
        heading: "2. Loss Function",
        paragraphs: ["The model learns parameters by minimizing Mean Squared Error (MSE)."],
        equation: "MSE = (1/n) Σ (yᵢ − ŷᵢ)²",
        bullets: ["yᵢ = actual target", "ŷᵢ = predicted output", "n = total samples"]
      },
      {
        heading: "3. Implementation",
        paragraphs: ["Quick implementation using scikit-learn:"],
        code: `import numpy as np
from sklearn.linear_model import LinearRegression

X = np.array([[1], [2], [3], [4]])
y = np.array([3, 5, 7, 9])

model = LinearRegression().fit(X, y)
print("Prediction for 5:", model.predict([[5]])[0])`
      }
    ]
  },
  {
    id: "gradient-descent",
    title: "Understanding Gradient Descent",
    category: "Mathematics",
    type: "Article",
    readTime: "7 min read",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80",
    summary: "Iterative optimization algorithm used to minimize objective loss functions in machine learning models.",
    introduction: "Gradient descent computes parameter steps in the direction of steepest loss reduction.",
    sections: [
      {
        heading: "1. Mathematical Principle",
        paragraphs: ["Updates are computed proportionally to the negative gradient of the loss function."],
        equation: "θₜ₊₁ = θₜ − α ∇J(θₜ)",
        bullets: ["θ = parameter vector", "α = learning rate", "∇J(θ) = loss gradient"]
      },
      {
        heading: "2. Python Script",
        paragraphs: ["Finding the minimum of scalar loss f(x) = x²:"],
        code: `x = 5.0
alpha = 0.1

for _ in range(50):
    grad = 2 * x
    x = x - alpha * grad

print("Minimizer x ≈", round(x, 5))`
      }
    ]
  }
];